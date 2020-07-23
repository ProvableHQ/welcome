const fs = require('fs');
const glob = require("glob");
const parseMD = require('parse-md').default;

/**************************************************************
 ************************* UPDATE THIS ************************
 **************************************************************/

/**
 * Edit this section to update the documentation README.
 * The rendered README will display in the order shown below.
 */
const DOCUMENTATION = [
    {
        title: 'Welcome to Aleo.',
        folderName: 'aleo',
        chapters: [
            {
                title: 'Getting Started',
                folderName: 'getting_started'
            },
            {
                title: 'Concepts',
                folderName: 'concepts'
            },
            {
                title: 'Networking',
                folderName: 'networking'
            },
            {
                title: 'RPC',
                folderName: 'rpc'
            }
        ]
    },
    {
        title: 'Hello Leo!',
        folderName: 'leo',
        chapters: [
            {
                title: 'Getting Started',
                folderName: 'getting_started'
            },
            {
                title: 'Language',
                folderName: 'language'
            },
            {
                title: 'CLI',
                folderName: 'cli'
            },
            {
                title: 'Additional Material',
                folderName: 'additional_material'
            },
        ]
    }
];

/**************************************************************
 ********************* DO NOT CHANGE BELOW ********************
 **************************************************************/

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

        let documentation = ["# Aleo Documentation\n\n"];

        // Get the total number of sections.
        let numSections = DOCUMENTATION.length;
        // Iterate through all sections.
        let i = 0;
        for await (let section of DOCUMENTATION) {

            // Add the section title to documentation.
            let title = section.title;
            documentation.push("## " + title + "\n\n");

            // Get the total number of chapters per section.
            let numChapters = section.chapters.length;
            // Iterate through all chapters per section.
            let j = 0;
            for await (let chapter of section.chapters) {

                // Add the chapter title to documentation.
                let chapterTitle = chapter.title;
                documentation.push("## Chapter " + j + ": " + chapterTitle + "\n\n");

                // Add the chapter topics to documentation.
                let chapterFolder = chapter.folderName;
                documentation.push(await generateChapterDocumentation(markdownFiles, "/" + section.folderName + "/" + chapterFolder));

                j++;
            }

            i++;
        }

        // Add the Contributing section.
        documentation.push("## Contributing\n\n");
        documentation.push("This README is auto-generated during continuous integration. To update this README, click [here](../internal/parser/parser.js) to see the source code that generates this document.\n\n");

        fs.writeFileSync('../../documentation/README.md', documentation.join(''), { encoding: 'utf8', flag: 'w' });
    }
});
