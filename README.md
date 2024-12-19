# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  The `bug.js` file shows an example where an asynchronous operation is performed within a route handler, but the potential error is not caught. This can lead to the server silently failing or exhibiting unexpected behavior.  The solution (`bugSolution.js`) demonstrates best practices for properly handling these rejections.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`. Observe that the server might run without error, or it might crash silently.  The behavior is not deterministic because of the use of `Math.random()`.
4. Run `node bugSolution.js` to see a properly handled version.

## Solution

The solution includes robust error handling using a `.catch()` block to gracefully handle any rejections. It also includes logging to help with debugging.

This example highlights the importance of always handling potential errors when dealing with asynchronous operations in Express.js to prevent unexpected behavior and ensure application stability.