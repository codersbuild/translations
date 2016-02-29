Translations
===

Coders Build Web App Translations used on https://coders.build


Creating a Translation File
===

Each supported language should be contained within its own folder within `./src` using the ISO 639-1 code for that language.
For example, the English language should be in the `./src/en` folder.

__Instructions:__

1. Copy `./src/en` as the base for your new translation
2. Place your copy of `./src/en` into `./src` with a new name using the correct two character [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
3. Update the `VALUE` for each `KEY` into the language you are contributing. __DO NOT CHANGE THE KEY__, only the `VALUE`.  e.g. `{ "greeting": "Hello World" }` to `{ "greeting": "Hola Mundo" }`
4. Run `grunt build` and fix any errors it finds
5. __[Submit Pull Request](https://github.com/codersbuild/translations/pull/new/master)__

Grunt Terminal Commands:
---

You can use the following build commands via terminal ( make sure you are in `/path/to/translations` ):

#### Build for Distribution:

The following command will compile JSON files for Distribution.

```bash
grunt build
```

#### Create a Release:

```bash
grunt release
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __0__.5.1 => v __1__.0.0 )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 0.__5__.1 => v 0.__6__.0 )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 0.5.__1__ => v 0.5.__2__ )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-patch
```

#### Create a Pre-Release:

The following will:

1. Build & Package Distribution Files
2. Perform a git commit

```bash
grunt prerelease
```
