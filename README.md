Translations
===

Coders Build Web App Translations used on https://coders.build


Creating a Translation File
===

Each supported language should be contained within its own folder within `./src` using the ISO 639-1 code for that language.
For example, the English language should be in the `./src/en` folder.

__Rules:__

* Copy `./src/en` as the base for your new translation
* Place your copy of `./src/en` into `./src` with a new name using the correct ISO 639-1 code
* Run `grunt build` and fix any errors it finds
* Submit Pull Request

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
