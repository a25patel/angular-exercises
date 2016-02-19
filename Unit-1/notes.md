____Unit 1 ____
* [Angular Docs](https://docs.angularjs.org/api)
* [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
* [AngularJS by Example - Building a Bitcoin Investment Calculator](https://github.com/mjhea0/thinkful-angular)

Unit 1.2
 - Two-way data binding: allowing for dynamic, live templates, automatically update when data changes.
  * When model changes - view knows
  * When view changes - model knows
  ____Unit 1.2____
  * [Data Binding Reference](https://docs.angularjs.org/guide/databinding)
  * [ng-model Docs](https://docs.angularjs.org/api/ng/directive/ngModel)
  * [`$watch`](https://www.ng-book.com/p/The-Digest-Loop-and-apply/)
  * [ng-cloak StackOverflow discussion](http://stackoverflow.com/questions/12866447/prevent-double-curly-brace-notation-from-displaying-momentarily-before-angular-j)

Unit 1.3
* Model: How we model our data in code
  - allowed to model data in JSON objects
  - gives us services and factories, data modeling tools
  -Persistence is managed through AJAX to avoid 'page loads'
  - Includes:
    * access to persistent layer/store
    * business logic
    * CRUD functions
    * Data validation
* View: What the user sees
  -Custom Directives, special templating syntax are used
  -Two way data binding and rendering data
  - Includes:
    * markup for - presenting data, handling user interaction, showing and hiding elements
    * Filters to limit/organize data
    * expression / logic
* Controller (view-model): How the model and view communicate
  -Behavior defined in javascript
  -Views declare their controller in HTML using a custom attribute
* $scope: 'View Model'
  -all communication between view and controller is managed by scope variable.
  - If you want something to be used by the view, put it in the 'view model': $scope variable.
  - View -> $Scope (user input) -> Controller
    Controller -> $Scope (data) -> View
  _____Unit 1.3 ____
    - [MVC and MVVM with AngularJS](http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)

Unit 1.4
* Expressions: like javascript snippets
    - CANNOT write conditionals or loops inside an expression
* Filters: format the data before displaying it
  - Built in directives
  - Can build your own filters
  _____Unit 1.4 _____
  - https://docs.angularjs.org/guide/expression
  - <b id="f1">https://docs.angularjs.org/guide/filter</b> [↩](#a1)

Unit 1.5 L built in directives
* Directives: add functionality to HTML elements and attributes.
  - Create dynamic components that re-render whenever underlying data changes.
  - Writing a directive:
    1. Tag: <burger></burger>
    2. Attributes: <div burger='southern'></div>
    3. ?  
    4. ?

* Built in Directives:
https://docs.angularjs.org/api/ng/directive
  * ng-repeat
    - iterate over a collection and create a template for each item
    - like forEach
    
  * ng-hide
  * ng-href
  * ng-class
  * ng-src
  * ng-app
  * ng-show
  * ng-click
  * ng-disabled
  * ng-checked
  * ng-selected
  * ng-model
  * ng-style
  * ng-disabled
  * ng-readonly
  * ng-include
  * ng-switch
  * ng-controller
  * ng-view
  * ng-if
  * ng-init
  * ng-bind
  * ng-cloak
  * ng-bind-template
  * ng-model-options
  * ng-change
  * ng-form
  * ng-submit
