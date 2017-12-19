# angular5ngFactoryError

Minimal reproduction repo to demonstrate issue after upgrading to Angular 5.0.0 (also 5.1.0) from v. 4.4.6 in a hybrid AngularJS (1.4) setup. Ticket: https://github.com/angular/angular/issues/20945

## Error message:

After opening the index.html from angular-js/app you get the following error:
"angular.js:12477 Error: No component factory found for TestPage. Did you add it to @NgModule.entryComponents?
    at noComponentFactoryError (file:///D:/angular5ngFactoryError/angular-js/app/app.v5.js:4181:34)
    at CodegenComponentFactoryResolver.resolveComponentFactory (file:///D:/angular5ngFactoryError/angular-js/app/app.v5.js:4245:19)
    at doDowngrade (file:///D:/angular5ngFactoryError/angular-js/app/app.v5.js:23770:70)
    at link (file:///D:/angular5ngFactoryError/angular-js/app/app.v5.js:23803:21)
    at invokeLinkFn (file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:8789:9)
    at nodeLinkFn (file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:8289:11)
    at compositeLinkFn (file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:7680:13)
    at compositeLinkFn (file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:7684:13)
    at publicLinkFn (file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:7555:30)
    at file:///D:/angular5ngFactoryError/angular-js/node_modules/angular/angular.js:1662:27 <test-page>"

## Usage

Run npm install in angular-js folder then open the index.html from /app. If you replace the second script tag with app.v4.js you get a working hybrid solution. The sources of v5 are identical to the one built with v4 only minimal differences are there in the tooling files (package.json and tsconfig-aot.json) and the skipping of reflect-metadata import in client.ts. By using the app.v5.js the quoted error happens.

## Build
You can rebuild the Angular packages by:  
npm install  
npm run build  
In both folders

## Rationale

I'm in a very specific situation where I can not change the setup of our existing project using Angular 1.4. In order to upgrade our stack I tried to integrate the latest Angular in the only way I saw possible which is by using it through a different package. This repo is a very simplified version of this setup.

