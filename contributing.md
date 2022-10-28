<!-- @format -->

# Get started with the development

Great that you want to contribute! Nice to have you onboard. 🚀 To get started, follow this contributing guideline to set up the project and work with us!

## Necessary software & tools

The following tools and softwares are necessary to develop this application:

| name    | version             | link                                        |
| ------- | ------------------- | ------------------------------------------- |
| Node.js | ^18.x (recommended) | [Node.js v18](https://nodejs.org/en/)       |
| yarn    | ^1.22.x             | [yarn](https://yarnpkg.com/getting-started) |
| Rust    | ^1.64.x             | [Rust](https://www.rust-lang.org)           |

After installing the necessary tools, you can run the commands below to start developing.

## Development - Setting Up The Repository

-   clone the repository by running `git clone https://github.com/IamSebastianDev/pangolicons.git .` in your terminal or shell to clone the repo into the current directory.
-   run `yarn` or `yarn install` to install the dependencies. This will also trigger the `postinstall` script, which will install and setup the githooks.

## Development - CLI Commands

-   `yarn preci`: Removes all files inside the node_modules folder. Is part of the repository setup.
-   `yarn ci`: Installs all dependencies without generating a lockfile and throws and error if an update is needed.
-   `yarn postinstall`: Installs husky and githooks.
-   `yarn compile`: Compiles the icons into the necessary manifest file and places them according to the compiler.config.yml file.
-   `yarn build`: Triggers the build step for all packages.
-   `yarn format`: Formats the code using pretty-quick.
-   `yarn lint`: Uses [alexjs](https://github.com/get-alex/alex) to lint the project's md files.

## Development - Project Structure

The project is split into multiple subdirectories. You can read more about the different parts and how they work in the [docs](./docs/) directory.

-   [site](./site): The directory containing the [Pangolicons.xyz](https://pangolicons.xyz) site.
-   [packages](./packages/): The directory containing the different packages available for Pangolicons.
-   [icons](./icons/): The directory containing the source Icons, as they are exported from Illustrator.
-   [docs](./docs): The directory containing additional documentation useful for developing and testing Pangolicons.
-   [compiler](./compiler/): The directory containing the Pangolicons compiler.

## Development - Enforcing Code Standards

This project uses multiple tools to enforce code quality:

### Conventional commits

The project uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure a certain commit message style.

-   `feat`: Used when adding features to the application.
-   `fix`: Used when fixing a bug or issue.
-   `refactor`: Used when changing or improving code that is not a new feature or bug.
-   `chore`: Used when updating non application related code.
-   `test`: Used when working on tests

### Formatting

The project uses prettier to format the code to conform to a certain style. Formatting is enforced using [pretty-quick](https://www.npmjs.com/package/pretty-quick) as a pre-commit hook.

## Development - Git Structure

To develop a feature, checkout a new Branch from `development` and prefix it with the correct branch type. The project currently differentiates between two branch types, `feature` and `bugfix`. For example, a branch to fix a bug would be created like this:

```bash
$ git checkout development
# checkout development as basis for development
$ git checkout -b bugfix/bug-to-fix
# creates a new branch with the correct branch type prefixed
```
