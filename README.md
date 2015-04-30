# florida
## Hapi Server, React Isomorphic, Browserify Bundling

[ ![Codeship Status for wbeard/florida](https://codeship.com/projects/2086e2b0-d0ca-0132-952c-2af27bf90e4e/status?branch=master)](https://codeship.com/projects/77102)

## Setup

#### Build components & static resources
    npm run build

#### Serve them
    npm run start

#### Open in your browser
    open http://localhost:8000/app


## Folder Structure

#### Inspired by [react-isomorphic-boilerplate](https://github.com/jesstelford/react-isomorphic-boilerplate)

    - src
      - browser   # Browser side logic
      - common
        - components  # Shared react components
      - lib
        - components  # Transpiled react components
      - public
        - js          # Bundled js
      - server
        - plugins     # Hapi plugins*
        - routes      # Server routes*
        - templates   # Server handlebars templates

    * Structure pending
