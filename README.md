Translations
===

Coders Build Web App Translations used on https://coders.build


Installation:
---

#### You can easily contribute to this project by doing the following:

_NOTE: Replace BRANCH_NAME with lowercase English "Language Name" from the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)_

```bash
# Clone Repository
git clone git@github.com:codersbuild/translations.git

# Create your own Branch
git checkout -b BRANCH_NAME

# ... Make your changes as discussed in "Creating a Translation"

# Commit & Push your Branch
git commit -m "Your Commit Message"
git push origin BRANCH_NAME

# ... Submit Pull Request at https://github.com/codersbuild/translations/pull/new/master
```


Creating a Translation
---

Each supported language should be contained within its own folder within `./src` using the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for that language.
For example, the English language should be in the `./src/en` folder.

__Instructions:__

1. Copy `./src/en` as the base for your new translation
2. Place your copy of `./src/en` into `./src` with a new name using the correct two character [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
3. Update the `VALUE` for each `KEY` into the language you are contributing. __DO NOT CHANGE THE KEY__, only the `VALUE`.  e.g. `{ "greeting": "Hello World" }` to `{ "greeting": "Hola Mundo" }`
4. Run `grunt build` and fix any errors it finds
5. __[Submit Pull Request](https://github.com/codersbuild/translations/pull/new/master)__

