### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

callbacks, promises, aysnc/await

- What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

- What are the differences between an async function and a regular function?

An async function is a special type of function that returns a Promise, allowing asynchronous operations to be performed using await within its body. This makes the code appear more synchronous and easier to read. In contrast, a regular function does not handle asynchronous code directly and typically relies on callbacks or Promises for managing asynchronous behavior.

- What is the difference between Node.js and Express.js?

Node.js is a runtime environment that allows JavaScript to be run on the server side, enabling the development of server-side applications. It provides the core modules and APIs for building network applications. Express.js, on the other hand, is a web application framework built on top of Node.js, providing a higher-level set of tools and abstractions for building web servers and APIs more easily and efficiently.

- What is the error-first callback pattern?

The error-first callback pattern is a convention used in Node.js where callbacks take an error object as the first argument and the result of the operation as the second argument. This pattern ensures that errors are handled consistently and immediately, preventing them from being overlooked.

- What is middleware?

Middleware refers to functions that have access to the request and response objects in an application, as well as the next function. They are used to process requests before they reach the final route handler. Middleware functions can perform tasks such as logging, authentication, parsing request bodies, and handling errors.

- What does the `next` function do?

The next function is used in middleware to pass control to the next middleware function in the stack. It allows multiple middleware functions to be chained together, each performing a specific task. If next is not called, the request-response cycle will be left hanging, and the client will not receive a response.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

The code fetches user data sequentially, leading to longer wait times as each request waits for the previous one to finish. It lacks error handling, meaning any failed request will throw an unhandled error. The variable names are too specific, and the returned array's order is inconsistent with the request sequence. Additionally, the code can be simplified to avoid redundancy. Using Promise.all to fetch data concurrently and adding try-catch for error handling would improve performance and reliability.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
