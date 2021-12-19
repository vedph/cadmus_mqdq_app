# Cadmus Musisque Deoque Frontend

Quick Docker image build:

1. `ng build --configuration production`
2. `docker build . -t vedph2020/cadmus-mqdq-app:4.0.0 -t vedph2020/cadmus-mqdq-app:latest` (replace with the current version)

**Production** (this refers to VeDPH):

1. build as currently hosted in a subfolder: `ng build --base-href /cadmus/mqdq/ --configuration production`;
2. manually edit in `dist` folder `env.js` to change the API URI (currently `https://cophilab.ilc.cnr.it/cadmus/mqdq/api/`);
3. `docker build . -t vedph2020/cadmus-mqdq-app:1.0.29-prod`.

Web application frontend for Cadmus _Musisque Deoque_. This application is built by packing together a number of components:

- _frontend_: the app includes the application and its specific libraries; shared Cadmus libraries (as defined in [Cadmus shell](https://github.com/vedph/cadmus_shell)) are used from NPM.

- _backend_: the corresponding backend API is [Cadmus API](https://github.com/vedph/cadmus_api). The MQDQ project has no specific parts, and thus uses the general-purpose backend with its stock parts and fragments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## History

- 2021-12-19: refactored frontend according to the new [shell libraries](https://github.com/vedph/cadmus-shell). Frontend image version 4.0.0, backend 3.0.1.
- 2021-11-22: upgraded to refactored API endpoints. Image versions bumped to 3.0.0.
- 2021-11-21: upgraded to Cadmus shell frontend libraries 0.3.0 (incorporating `@myrmidon/ng-tools` and `@myrmidon/ng-mat-tools`, and upgraded to strict mode). Image versions bumped to 2.0.0 for frontend, and 2.0.1 for backend (minor updates).
- 2021-11-11: upgraded to Angular 13 (backend upgraded to .NET 6).
- 2021-10-15: upgraded to use newer general parts with replaced document references. This anyway does not directly affects MQDQ, as it does not use any part or fragment including the document references model. New Docker images have been generated with version dump to 1.1.0 because of the small breaking change in the backend for the Mongo auth database.
