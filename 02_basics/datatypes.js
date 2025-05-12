"use stict" // uses the strict mode

// your code should be readable in nature
let age = 18
let isLoggedIn = false

// number = 2 to power 53 
// bigint   
// string = ""
// boolean = true/false
// null = stand alone value
// undefined
// symbol = unique

console.log(typeof "")
console.log(typeof null)
console.log(typeof undefined)

//

// JavaScript Tutorial Notes - Data Types
// Introduction

// Purpose: This video is part of a JavaScript series aimed at teaching core concepts. The focus is on understanding data types and hidden aspects of JavaScript.
// Objective: Provide clear, structured notes in English to help learners grasp JavaScript fundamentals, with practical advice for coding and learning.

// Key Points
// Learning Approach

// Avoid Over-Reliance on Pen and Paper: Traditional note-taking (writing everything on paper) is not ideal for learning programming. Instead, focus on hands-on practice.
// Writing code directly on a keyboard improves coding skills.
// Notes should be taken digitally, preferably in the same environment where coding is done (e.g., code comments or a text editor).
// Excessive pen-and-paper practice (e.g., copying code manually) doesn't translate to real-world coding proficiency.


// Practice is Key: To become a good coder, prioritize typing and experimenting with code over memorizing or writing notes by hand.
// Example: Instead of writing code logic on paper, use a code editor to test and debug directly.



// JavaScript Evolution

// Modern vs. Older JavaScript: JavaScript has evolved significantly over the past 8-10 years.
// Older JavaScript lacked features like classes, modules, and arrow functions, which are now standard.
// Backward compatibility ensures old code still works, but modern JavaScript follows newer standards.


// "use strict" Directive:
// Writing "use strict"; at the top of a JavaScript file ensures the code is treated as a newer version of JavaScript.
// This enforces stricter rules, preventing deprecated practices and ensuring compatibility with modern features.
// Example:"use strict";
// // Your JavaScript code here


// In modern environments, strict mode is often enabled by default, so explicitly writing "use strict"; is optional but considered good practice.
// Once "use strict"; is used, the entire file follows modern standards. There’s no way to revert to non-strict mode within the same file.



// Common JavaScript Statements

// Alert Statement:

// The alert() function displays a popup in the browser with a message (e.g., alert("Hello");).
// However, alert() is not supported in Node.js, only in browser environments.
// Example (Browser-only):alert(3 + 3); // Displays a popup with "6"


// In Node.js, running alert() causes an error because it’s not defined. Use console.log() instead for Node.js.
// Note: Comment out alert() code when running in Node.js to avoid errors.// alert("Hello"); // Not supported in Node.js
// console.log("We are using Node.js, not browser");




// Console Logging:

// Use console.log() to print output in the console, especially in Node.js.
// Example:console.log(3 + 3); // Outputs: 6
// console.log("Hitesh"); // Outputs: Hitesh





// Code Readability

// Importance of Readability:
// Readable code is crucial for collaboration and maintenance.
// Poorly formatted code (e.g., cramped lines, missing semicolons) may work but is hard to understand.
// Example of bad practice:console.log(3+3);console.log("Hitesh");


// This code runs but is unreadable due to lack of spacing and new lines.


// Good practice:console.log(3 + 3); // Clear and readable
// console.log("Hitesh");


// Use proper indentation, spacing, and semicolons to enhance readability.


// Semicolons:
// JavaScript has Automatic Semicolon Insertion (ASI), so semicolons are optional in many cases.
// However, including semicolons improves clarity, especially in frameworks like React or Node.js.
// Example:"use strict"; // Semicolon used
// console.log("Hello"); // No semicolon, still works




// Avoid Unnecessary Complexity:
// Don’t cram multiple statements into one line or use excessive spaces/newlines unnecessarily.
// Example of bad practice:console.log(3 + 3)
// ; console.log("Hitesh")


// This is unnecessarily complex and reduces readability.




// Tools for Readability:
// Use extensions like Prettier in code editors (e.g., VS Code) to automatically format and indent code.
// Even with tools, avoid poor practices like writing unreadable code intentionally.



// JavaScript Documentation

// Recommended Resources:
// MDN Web Docs: A beginner-friendly resource for JavaScript documentation. It’s well-written and easy to understand.
// Example: Look up alert() or data types on MDN for clear explanations.


// TC39 (ECMAScript Specification): The official JavaScript standard maintained by the ECMA organization.
// Defines how JavaScript should behave (e.g., loop outputs, input handling).
// Not beginner-friendly but essential for understanding language standards.
// Example: TC39 specifies how whitespace, comments, or variable names should be handled.




// ECMAScript Background:
// In the early days, browsers had different JavaScript implementations, leading to inconsistencies.
// ECMAScript was created to standardize JavaScript across browsers.
// TC39 documents standards like variable naming rules, whitespace handling, and comment syntax.
// Example: TC39 specifies that multiline comments (/* */) and single-line comments (//) are supported.



// Data Types in JavaScript
// JavaScript has a small set of data types, making it relatively easy to learn. Data types are categorized into primitive and non-primitive types.
// Primitive Data Types

// Number:
// Represents numeric values (integers or floating-point).
// Example:let age = 18; // Number
// console.log(age); // Outputs: 18


// Range: Numbers in JavaScript are limited to approximately ±2^53 (exact range depends on IEEE 754 standard).
// BigInt:
// Used for very large integers beyond the Number range.
// Rarely used in typical programming but common in applications like stock trading or large-scale websites (e.g., Reddit).
// Example:let bigNumber = 12345678901234567890n; // BigInt
// console.log(bigNumber);






// String:
// Represents text, enclosed in single (') or double (") quotes.
// Example:let name = "Hitesh"; // String
// console.log(name); // Outputs: Hitesh




// Boolean:
// Represents true or false values.
// Used for yes/no scenarios (e.g., user logged in or not).
// Example:let isLoggedIn = true; // Boolean
// console.log(isLoggedIn); // Outputs: true




// Null:
// A standalone value representing "empty" or "no value."
// Not the same as an empty string ("") or zero (0).
// Example:let temperature = null; // No temperature data
// console.log(temperature); // Outputs: null


// Common use case: When a server fails to return data (e.g., temperature), null indicates "no value" rather than 0 (a valid temperature).


// Undefined:
// Represents a variable that has been declared but not assigned a value.
// Example:let value;
// console.log(value); // Outputs: undefined


// Difference from null:
// undefined: Value not assigned yet.
// null: Intentionally set to "empty."




// Symbol:
// A unique and immutable value, often used for unique identifiers.
// Commonly used in advanced scenarios like React component identification.
// Example:let id = Symbol("id");
// console.log(id); // Outputs: Symbol(id)


// Use case: Ensures uniqueness in object properties or component IDs.



// Non-Primitive Data Type

// Object:
// A complex data type that stores key-value pairs or collections of data.
// Will be covered in detail in future videos (at least 5-6 dedicated sessions).
// Example:let user = { name: "Hitesh", age: 18 };
// console.log(user); // Outputs: { name: "Hitesh", age: 18 }





// Checking Data Types

// Use the typeof operator to determine the type of a value or variable.
// Syntax:console.log(typeof value);


// Examples:let name = "Hitesh";
// console.log(typeof name); // Outputs: string

// let age = 18;
// console.log(typeof age); // Outputs: number

// let isLoggedIn = true;
// console.log(typeof isLoggedIn); // Outputs: boolean

// console.log(typeof null); // Outputs: object (historical quirk)
// console.log(typeof undefined); // Outputs: undefined


// Quirk with null:
// typeof null returns "object", which is a known bug in JavaScript but retained for backward compatibility.
// This is a common interview question: "What is the type of null?" (Answer: object).
// undefined correctly returns "undefined" as its type.



// Assignment

// Explore the ECMAScript (TC39) specification to understand JavaScript standards.
// Focus on basic sections like global objects, whitespace rules, or variable naming.
// No need to dive deep; skim through to get familiar.


// Use MDN Web Docs for practical learning and reference.
// Access the Git основе repository mentioned in the video for exercise files:
// Files are available under the 01_basics folder.
// Star and fork the repository to keep a personal copy for practice.



// Code Examples
// Below are code snippets summarizing the key concepts discussed:
// // Using "use strict" for modern JavaScript
// "use strict";

// // Variables and Data Types
// let name = "Hitesh"; // String
// let age = 18; // Number
// let isLoggedIn = true; // Boolean
// let temperature = null; // Null
// let value; // Undefined
// let id = Symbol("id"); // Symbol

// // Checking Types
// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof temperature); // object (quirk)
// console.log(typeof value); // undefined
// console.log(typeof id); // symbol

// // Console Logging
// console.log(3 + 3); // 6
// console.log("Hitesh"); // Hitesh

// // Note: Avoid alert() in Node.js
// // alert("Hello"); // Error in Node.js
// console.log("We are using Node.js, not browser");

// Best Practices

// Write Readable Code:
// Use proper spacing, indentation, and semicolons.
// Avoid cramming multiple statements into one line.


// Practice Hands-On:
// Type code in a code editor rather than writing it on paper.
// Experiment with small code snippets to understand behavior.


// Use Modern JavaScript:
// Include "use strict"; for consistency, even if optional.
// Refer to MDN for modern syntax and examples.


// Understand Data Types:
// Master primitive types (Number, String, Boolean, Null, Undefined, Symbol) before diving into Objects.
// Be aware of quirks like typeof null returning "object".


// Leverage Tools:
// Use Prettier or similar extensions for automatic code formatting.
// Explore TC39 for standards and MDN for practical guidance.



// Summary

// This video introduces JavaScript data types (Number, String, Boolean, Null, Undefined, Symbol, Object) and emphasizes practical learning.
// Key takeaways:
// Practice coding directly in a code editor to build skills.
// Use "use strict"; for modern JavaScript standards.
// Prioritize code readability with proper formatting.
// Understand the difference between null (empty value) and undefined (unassigned value).
// Use typeof to check data types, noting quirks like null being an "object".


// Next steps:
// Explore TC39 and MDN documentation.
// Practice with provided exercise files from the GitHub repository.
// Prepare for deeper discussions on Objects in future videos.



