# angular5ngFactoryError
Issue after upgrading to v5 from v4

Minimal reproduction repo to demonstrate issue after upgrading to Angular 5.0.0 from v. 4.4.6 in a hybrid AngularJS (1.4) setup

Error message:
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
