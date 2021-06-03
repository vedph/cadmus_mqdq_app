# CadmusMqdqApp

Quick Docker image build:

1. `ng build --prod`
2. `docker build . -t vedph2020/cadmus-mqdq-app:1.0.18 -t vedph2020/cadmus-mqdq-app:latest` (replace with the current version)

**Production** (this refers to VeDPH): after editing `env.js` for API URI (currently `https://penia.cophilab.ilc.cnr.it/api/`), build:

1. currently hosted in a subfolder: `ng build --base-href /cadmus/mqdq/`
2. `docker build . -t vedph2020/cadmus-mqdq-app:1.0.23-prod`

Web application frontend for Cadmus _Musisque Deoque_. This application is built by packing together a number of components:

- _frontend_: the app includes the application and its specific libraries; shared Cadmus libraries (as defined in [Cadmus shell](https://github.com/vedph/cadmus_shell)) are used from NPM.

- _backend_: the corresponding backend API is [Cadmus API](https://github.com/vedph/cadmus_api). The MQDQ project has no specific parts, and thus uses the general-purpose backend with its stock parts and fragments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Developer Environment

Cadmus shell libraries are now public in NPM, so this project just links to them. When updating them:

- increase the version numbers in the app's `package.json`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
