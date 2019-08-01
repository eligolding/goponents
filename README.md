# Goponents
###### (currently `v1.1.1`)

This project houses a set of UI components for Angular and designed around the 'GoDesign' system.

## Development server

Run `npm run publish_local` to compile the `go-lib` project, and run a local `npm install` into the repo for `go-tester` to use.
_then_
Run `ng serve --project=go-tester` to run the test project.

### Code scaffolding

Run `ng generate lib/components/component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run package` to build and pack the the library locally.
Run `npm run publish` to build and pack the library locally and also to push the package to npm.

## Other Useful Things

### Components Available

| Component    | Notes                                  |
|--------------|----------------------------------------|
| accordion    | Available                              |
| button       | Available                              |
| card         | Available                              |
| icon         | Available                              |
| modal        | Available                              |
| off-canvas   | Available                              |
| table        | Available                              |
| toasts       | Available                              |
|--------------|----------------------------------------|
| input        | Priority                               |
| textarea     | Priority                               |
| combobox     | Priority                               |
| checkbox     | Priority                               |
| copy button  | Priority                               |
| radio        | Priority                               |
| datepicker   | Will Need                              |
| autocomplete | Will Need                              |
| masked input | Will Need                              |
|--------------|----------------------------------------|
| tabs         | Idea                                   |
| badge        | Idea                                   |
| tooltip      | Idea                                   |
| slide toggle | Idea                                   |
| timepicker   | Idea                                   |

### Properly Exposing Files for Importing

The `projects/go-lib/src/public_api.ts` file exposes files to the root of the node module. This allows for importing like:

`import { GoTableConfig } from '@tangoe/goponents';`

To do this properly, you must export each individual file within the `public_api.ts` file.

