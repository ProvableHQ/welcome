# autogen

The directory structure in this folder is automatically merged with the
documentation directory structure in `aleo/documentation`.

The merge process starts by verifying that the path of each subdirectory
containing Markdown files in `autogen` does not already exist as an
overlapping path in `aleo/documentation`.

If it finds an overlap, where the path to the Markdown files matches, then
it will attempt to resolve the merge automatically by re-numbering the
merged set of files alphabetically. Otherwise, if a merged ordering is
specified in a configuration file, it will default to this instead. 

