# MG.org
Hugo-based site. This is just the public build, generated from source files that are in a separate (private) directory.

---

### A note about the build process

The recommended method of building a Hugo site for Github Pages is terrible and, in my experience, quite fragile (I managed to break it twice in a single sitting, once because I switched branches and the other time because who-knows-why). Instead of setting up a git submodule I simply changed `publishDir` in Hugo's config file to spit out the build *next to* the source directory, in a folder called michaelgallagher.github.io, which serves this site. Easy, though I wish I could just keep the build process in a default configuration and tell Github to serve the pages site from a specific, non-root directory.