
***

![/JavaScript_Logo.png](/JavaScript_Logo.png)

# Learning JavaScript

I am not too experienced with the JavaScript programming language at the moment, but I still know a somewhat good amount. This document will go over my knowledge of the JavaScript programming language so far.

This document uses version 1.8 of the JavaScript programming language. The version will NOT be listed with each example.

## Hello world in JavaScript

A simple Hello world program to print out to the web console

```javascript
console.log("Hello WorldWideWeb!");
```

_(i) This example has been tested yet, and works._

## Variables in JavaScript

Variables in JavaScript

```javascript
var x = 2
var y = 16
console.log(2**16);
```

_/!\ This example has not been tested yet, and may not work_

## Break in JavaScript

The break keyword in JavaScript

```javascript
console.log("Break time!");
break;
```

_/!\ This example has not been tested yet, and may not work. I still don't know exactly what the `break` keyword does_

## Functions in JavaScript

Functions in JavaScript

```javascript
function aFunctionalFunction {
	console.log("A functional function has finished functioning.");
	break;
}
return aFunctionalFunction();
```

_/!\ This example has not been tested yet, and may not work_

## Return in JavaScript

Returning in JavaScript

```javascript
function aFunctionalFunction {
	console.log("A functional function has finished functioning.");
	break;
}
return aFunctionalFunction();
```

_/!\ This example has not been tested yet, and may not work_

## Alert in JavaScript

The alert command creates an alerting dialogue box. 

```javascript
alert("Alert! The alert dialog box is now present");
break;
```

_/!\ This example has not been tested yet, and may not work_

Spamming this function can result in a checkmarkable option to stop displaying popups, as they can get annoying.

```javascript
var x = bool(true)
function alertAlot {
	while (x == true) {
		alert("I am an alert");
		break;
	}
}
return alerAlot();
break;
```

_/!\ This example has not been tested yet, and may not work_

## Comments in JavaScript

Comments in JavaScript are identical to comments in C or C++.

```javascript
// This is a single line comment
/* This
is a multiline
comment */
/* Multi-line comments
* can also
* be written
* like this */
```

## For loop in JavaScript

Here is an example of a `for` loop in JavaScript:

```javascript
let x = 0;
for x in range(1,10) {
	console.log(x);
}
```

I am not sure if JavaScript supports the `range` keyword in the same way that Python does.

_/!\ This example has not been tested yet, and may not work_

## While loop in JavaScript

Here is an example of a `while` loop in JavaScript

```javascript
let x = -16;
while x > 0 {
	console.log(x)
	x == x + 1;
}
```

_/!\ This example has not been tested yet, and may not work_

## If statement in JavaScript

Section coming soon

## Drawing in JavaScript

Section coming soon

## Classes in JavaScript

Classes are a feature in JavaScript. The way I know them, they are extremely similar to other languages. At the moment, I don't see much purpose in classes, so I am likely missing something and need to find out what.

```javascript
class superClass {
	console.log("Superclass says Hello");
}
```

## OnClick in JavaScript

This example is going to include HTML alongside JavaScript. The 2 languages work strongly together (along with CSS), so this shouldn't be surprising.

Here is the JavaScript portion:

```javascript
function javaScript {
	console.log("Object.OnClick activated, alerting message is going to be sent. If you didn't receive the message, you may have disabled dialog boxes for this page.");
	alert("Hello HTML, from JavaScript");
}
object.onclick = function(){javaScript}; 
```

Here is the HTML5 portion:

```html
<HTML>
<button>Click me!<element onclick="myScript">
</HTML>
```

## Booleans in JavaScript

Section coming soon

## Integers in JavaScript

Section coming soon

## Strings in JavaScript

Section coming soon

## Concatenation in JavaScript

Section coming soon

## Tuples in JavaScript

Section coming soon

## Lists in JavaScript

Section coming soon

## Let Keyword in JavaScript

Section coming soon

## Operators in JavaScript

Section coming soon

## Constant in JavaScript

Section coming soon

## Embedding JavaScript in HTML

Section coming soon

## Linking to JavaScript in HTML

Section coming soon

## Fun with mathematics in JavaScript

Section coming soon

## Date and time in JavaScript

Section coming soon

## Math dot random in JavaScript

Section coming soon

## Else statement in JavaScript

Section coming soon

## JSON and JavaScript

Section coming soon

## Blink tag in JavaScript

The blink tag requires HTML, CSS, AND JavaScript to work. The tag was deprecated, as it was too annoying, and disruptive, but most web browsers still support it.

```javascript
// JQuery example
setInterval(function(){
	$('blink').each(function() {
		$(this).toggle();
});
}, 250);
// Vanilla JavaScript example
(function() {
	var blinks = document.getElementsByTagName('blink');
	var visibility = 'hidden';
	window.setInterval(function() {
	for (var i = blinks.length - 1; i >= 0; i--) {
		blinks[i].style.visibility = visibility;
}
	visibility = (visibility === 'visible') ? 'hidden' : 'visible';
	}, 250);
})();
```

## To add

Several pieces of knowledge have not been added yet, including:

- [x] Hello World

- [x] Break

- [x] Functions

- [x] Return

- [x] Alert

- [x] Recursive alert

- [x] For loop

- [x] While loop

- [ ] If statement

- [ ] Drawing (various)

- [x] Classes

- [x] OnClick

- [ ] Booleans

- [ ] Integers

- [ ] Strings

- [ ] Concatenation

- [ ] Tuples

- [ ] Lists

- [x] Comments

- [ ] Let keyword

- [ ] Operators

- [ ] Const variables (cannot be altered)

- [ ] Embedding in HTML

- [ ] Linking to HTML

- [ ] JavaScript math

- [ ] JavaScript dates

- [ ] Math.random

- [ ] Else statement

And much more

***

## Source

Most of my JavaScript knowledge at the moment comes from example, W3Schools, experimentation through a consistent 1.5 year period (2019-2021) using Firefox, and also some from Wikipedia.

## Other knowledge of JavaScript

1. JavaScript uses the `*.js` file extension by default, but has the less common extensions `*.mjs` and `*.cjs`

2. Several browsers block JavaScript due to abuse and privacy concerns. GNU criticizes JavaScript, and calls certain sites that use it "non-free JavaScript" this has made me like JavaScript less

3. JavaScript has several toolchains and software compilers for it, including Gulp, Node.js, Vue.js, AngularJS, Electron, ProcessingJS, etc. (these are all the ones I know of) When none is used, it is known as vanilla JavaScript

4. JavaScript is NOT to be confused with Java

5. Microsoft had an early implementation of JavaScript of their own that they call JScript. It evolved into JScript.NET

6. JavaScript is one of the 3 standard languages for developing webpages (HTML5, CSS3, JavaScript) although it isn't always required, and other languages (such as PHP, Python, Ruby, etc.) can be used as well/instead

7. JavaScript++ is an implementation of JavaScript that adds features of C++ to JavaScript

8. JavaScript is a semicolon and curly bracket language

9. Brendan Eich invented JavaScript

10. NetScape developed a technology known as JSSS (JavaScript Style Sheets) in the 1990s, but it never caught on, but introduced several features to CSS

11. ECMAScript is the standardization language of JavaScript

12. JQuery is a common JavaScript library for graphics

13. BackboneJS is a minimal JavaScript library

14. JavaScript is noted in the programmer community as one of the most difficult programming languages in terms of absurdity, but may still be less complicated than C++ or Assembly in terms of complexity (Brainfuck and other Esotoric languages are not included here, as they are on a whole 'nother level) For JavaScript insanity examples, see [WTFJS](https://github.com/denysdovhan/wtfjs/) for detailed examples

15. WebGL is a JavaScript library used for 3D modeling within any standard/unstandard (Google Chrome/Google Chromium, Safari) web browser

16. No other knowledge of JavaScript

***

## Developer notes

This list was abandoned for a few months (not even being looked at from 2022 January 14th to 2022 April 18th) I have come back to it on 2022, April 19th, due to renewed interest in programming language knowledge repositories. I intend to keep as much of the original structure as possible, while also adding new knowledge. This is a legacy document, and was written differently than how I have been writing these types lately. Legacy parts (such as `variables in <language>` sections) will remain unchanged, while improvements will take place (notably: fixing the JavaScript comments example, adding new `other knowledge of JavaScript` adding the developer notes section, referencing the JavaScript logo, adding sources, adding a file version timestamp, changing all level 4 headers to level 2, and changing the title header from level 3 to level 1)

When this list goes public, it will still be incomplete, and will not be regarded as a complete entry.

***

**File version:** `1 (2022, Tuesday, April 19th at 7:16 pm PST)` - Prepared 1 day early

***
