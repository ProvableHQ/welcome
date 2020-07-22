const fs = require('fs');
const glob = require("glob");
const parseMD = require('parse-md').default;

const getDirectories = (src, callback) => {
    glob(src + '/**/*', callback);
};

/**
 * Example Input
 *
 * files = [ "../../documentation/leo/getting_started/00_overview.md" ]
 * directoryWithChapter = "/leo/getting_started"
 */
const generateChapterDocumentation = async (files, directoryWithChapter) => {
    // Filter the list of all files down to the chapter directory.
    files = files.filter((filepath) => {
        return filepath.indexOf(directoryWithChapter) !== -1;
    });

    // Sort the files by the indices in the directories and file names.
    let sortedFiles = files.sort((a, b) => {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    });

    // Process the list of Markdown files.
    let documentation = "";
    for await (let filepath of sortedFiles) {
        console.log('Processing', filepath);

        // Read the Markdown file, parse the metadata and contents, and extract the title.
        const fileContents = fs.readFileSync(filepath, 'utf8');
        const { metadata, content } = parseMD(fileContents);
        let title = metadata.title;

        // Construct the final relative filepath.
        const indexOfDirectory = filepath.indexOf(directoryWithChapter);
        const relativePath = '.' + filepath.substr(indexOfDirectory);

        // Add the entry into the documentation.
        documentation += ("- [" + title + "](" + relativePath + ")\n");
    }

    // Add two extra newlines for spacing.
    documentation += "\n\n";

    return documentation
};

// Fetch the relevant Markdown files in the documentation directory.
getDirectories('../../documentation', async (err, list) => {
    if (err) {
        console.log('Error', err);
    } else {
        // Filter the list of all files to just Markdown files.
        const extension = '.md';
        const markdownFiles = list.filter((filepath) => {
            return filepath.indexOf(extension) !== -1;
        });

        const documentation = [
            "# Aleo Documentation\n\n",

            "## Welcome to Aleo.\n\n",

            "### Preamble\n\n",

            await generateChapterDocumentation(markdownFiles, '/aleo/'),

            "## Hello Leo\n\n",

            "### Chapter 0: Getting Started\n\n",

            await generateChapterDocumentation(markdownFiles, '/leo/getting_started'),

            "### Chapter 1: Language\n\n",

            await generateChapterDocumentation(markdownFiles, '/leo/language'),

            "### Chapter 2: CLI\n\n",

            await generateChapterDocumentation(markdownFiles, '/leo/cli'),

            "### Chapter 3: Additional Material\n\n",

            await generateChapterDocumentation(markdownFiles, '/leo/additional_material'),

            "## Contributing\n\n",

            "This README is auto-generated during continuous integration. To update this README, click [here](../internal/parser/parser.js) to see the source code that generates this document.\n\n"

        ].join("");

        fs.writeFileSync('../../documentation/README.md', documentation, { encoding: 'utf8', flag: 'w' });
    }
});
