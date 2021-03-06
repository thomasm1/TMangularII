#AngularJS is distributed as a JavaScript file, and can be added to a web page with 
a script tag:

##<script 
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
AngularJS Extends HTML
AngularJS extends HTML with ng-directives.

The ng-app directive defines an AngularJS application.

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

The ng-bind directive binds application data to the HTML view.

AngularJS Example
<!DOCTYPE html>
<html>
##<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>Name: <input type="text" ng-model="name"></p>
  <p ng-bind="name"></p>
</div>

</body>


-|-
###DIRECTIVES LIST V6
ngJq	
Use this directive to force the angular.element library. This should be used to force either jqLite by leaving ng-jq blank or setting the name of the jquery variable under window (eg. jQuery).

ngApp	
Use this directive to auto-bootstrap an AngularJS application. The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

a	
Modifies the default behavior of the html a tag so that the default action is prevented when the href attribute is empty.

ngHref	
Using AngularJS markup like {{hash}} in an href attribute will make the link go to the wrong URL if the user clicks it before AngularJS has a chance to replace the {{hash}} markup with its value. Until AngularJS replaces the markup the link will be broken and will most likely return a 404 error. The ngHref directive solves this problem.

ngSrc	
Using AngularJS markup like {{hash}} in a src attribute doesn't work right: The browser will fetch from the URL with the literal text {{hash}} until AngularJS replaces the expression inside {{hash}}. The ngSrc directive solves this problem.

ngSrcset	
Using AngularJS markup like {{hash}} in a srcset attribute doesn't work right: The browser will fetch from the URL with the literal text {{hash}} until AngularJS replaces the expression inside {{hash}}. The ngSrcset directive solves this problem.

ngDisabled	
This directive sets the disabled attribute on the element (typically a form control, e.g. input, button, select etc.) if the expression inside ngDisabled evaluates to truthy.

ngChecked	
Sets the checked attribute on the element, if the expression inside ngChecked is truthy.

ngReadonly	
Sets the readonly attribute on the element, if the expression inside ngReadonly is truthy. Note that readonly applies only to input elements with specific types. See the input docs on MDN for more information.

ngSelected	
Sets the selected attribute on the element, if the expression inside ngSelected is truthy.

ngOpen	
Sets the open attribute on the element, if the expression inside ngOpen is truthy.

ngForm	
Helper directive that makes it possible to create control groups inside a form directive. These "child forms" can be used, for example, to determine the validity of a sub-group of controls.

form	
Directive that instantiates FormController.

textarea	
HTML textarea element control with AngularJS data-binding. The data-binding and validation properties of this element are exactly the same as those of the input element.

input	
HTML input element control. When used together with ngModel, it provides data-binding, input state control, and validation. Input control follows HTML5 input types and polyfills the HTML5 validation behavior for older browsers.

ngValue	
Binds the given expression to the value of the element.

ngBind	
The ngBind attribute tells AngularJS to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.

ngBindTemplate	
The ngBindTemplate directive specifies that the element text content should be replaced with the interpolation of the template in the ngBindTemplate attribute. Unlike ngBind, the ngBindTemplate can contain multiple {{ }} expressions. This directive is needed since some HTML elements (such as TITLE and OPTION) cannot contain SPAN elements.

ngBindHtml	
Evaluates the expression and inserts the resulting HTML into the element in a secure way. By default, the resulting HTML content will be sanitized using the $sanitize service. To utilize this functionality, ensure that $sanitize is available, for example, by including ngSanitize in your module's dependencies (not in core AngularJS). In order to use ngSanitize in your module's dependencies, you need to include "angular-sanitize.js" in your application.

ngChange	
Evaluate the given expression when the user changes the input. The expression is evaluated immediately, unlike the JavaScript onchange event which only triggers at the end of a change (usually, when the user leaves the form element or presses the return key).

ngClass	
The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

ngClassOdd	
The ngClassOdd and ngClassEven directives work exactly as ngClass, except they work in conjunction with ngRepeat and take effect only on odd (even) rows.

ngClassEven	
The ngClassOdd and ngClassEven directives work exactly as ngClass, except they work in conjunction with ngRepeat and take effect only on odd (even) rows.

ngCloak	
The ngCloak directive is used to prevent the AngularJS html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display.

ngController	
The ngController directive attaches a controller class to the view. This is a key aspect of how angular supports the principles behind the Model-View-Controller design pattern.

ngCsp	
AngularJS has some features that can conflict with certain restrictions that are applied when using CSP (Content Security Policy) rules.

ngClick	
The ngClick directive allows you to specify custom behavior when an element is clicked.

ngDblclick	
The ngDblclick directive allows you to specify custom behavior on a dblclick event.

ngMousedown	
The ngMousedown directive allows you to specify custom behavior on mousedown event.

ngMouseup	
Specify custom behavior on mouseup event.

ngMouseover	
Specify custom behavior on mouseover event.

ngMouseenter	
Specify custom behavior on mouseenter event.

ngMouseleave	
Specify custom behavior on mouseleave event.

ngMousemove	
Specify custom behavior on mousemove event.

ngKeydown	
Specify custom behavior on keydown event.

ngKeyup	
Specify custom behavior on keyup event.

ngKeypress	
Specify custom behavior on keypress event.

ngSubmit	
Enables binding AngularJS expressions to onsubmit events.

ngFocus	
Specify custom behavior on focus event.

ngBlur	
Specify custom behavior on blur event.

ngCopy	
Specify custom behavior on copy event.

ngCut	
Specify custom behavior on cut event.

ngPaste	
Specify custom behavior on paste event.

ngIf	
The ngIf directive removes or recreates a portion of the DOM tree based on an {expression}. If the expression assigned to ngIf evaluates to a false value then the element is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.

ngInclude	
Fetches, compiles and includes an external HTML fragment.

ngInit	
The ngInit directive allows you to evaluate an expression in the current scope.

ngList	
Text input that converts between a delimited string and an array of strings. The default delimiter is a comma followed by a space - equivalent to ng-list=", ". You can specify a custom delimiter as the value of the ngList attribute - for example, ng-list=" | ".

ngModel	
The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

ngModelOptions	
This directive allows you to modify the behaviour of ngModel directives within your application. You can specify an ngModelOptions directive on any element. All ngModel directives will use the options of their nearest ngModelOptions ancestor.

ngNonBindable	
The ngNonBindable directive tells AngularJS not to compile or bind the contents of the current DOM element, including directives on the element itself that have a lower priority than ngNonBindable. This is useful if the element contains what appears to be AngularJS directives and bindings but which should be ignored by AngularJS. This could be the case if you have a site that displays snippets of code, for instance.

ngOptions	
The ngOptions attribute can be used to dynamically generate a list of <option> elements for the <select> element using the array or object obtained by evaluating the ngOptions comprehension expression.

ngPluralize	
ngPluralize is a directive that displays messages according to en-US localization rules. These rules are bundled with angular.js, but can be overridden (see AngularJS i18n dev guide). You configure ngPluralize directive by specifying the mappings between plural categories and the strings to be displayed.

ngRepeat	
The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

ngShow	
The ngShow directive shows or hides the given HTML element based on the expression provided to the ngShow attribute.

ngHide	
The ngHide directive shows or hides the given HTML element based on the expression provided to the ngHide attribute.

ngStyle	
The ngStyle directive allows you to set CSS style on an HTML element conditionally.

ngSwitch	
The ngSwitch directive is used to conditionally swap DOM structure on your template based on a scope expression. Elements within ngSwitch but without ngSwitchWhen or ngSwitchDefault directives will be preserved at the location as specified in the template.

ngTransclude	
Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.

script	
Load the content of a <script> element into $templateCache, so that the template can be used by ngInclude, ngView, or directives. The type of the <script> element must be specified as text/ng-template, and a cache name for the template must be assigned through the element's id, which can then be used as a directive's templateUrl.

select	
HTML select element with AngularJS data-binding.

ngRequired	
ngRequired adds the required validator to ngModel. It is most often used for input and select controls, but can also be applied to custom controls.

ngPattern	
ngPattern adds the pattern validator to ngModel. It is most often used for text-based input controls, but can also be applied to custom text-based controls.

ngMaxlength	
ngMaxlength adds the maxlength validator to ngModel. It is most often used for text-based input controls, but can also be applied to custom text-based controls.

ngMinlength	
ngMinlength adds the minlength validator to ngModel. It is most often used for text-based input controls, but can also be applied to custom text-based controls.
