# Broken App Issues

1. **Async/Await in Map**:
   - The original code used `async` in the `map` function, which returns an array of promises. This array was used without waiting for the promises to resolve, causing incorrect responses.

2. **Missing Middleware**:
   - The original code did not include the `express.json()` middleware, which is necessary to parse JSON request bodies. Without this, `req.body` would be undefined.

3. **Error Handling**:
   - The original code did not properly handle errors. The `catch` block was missing the `err` parameter, so any errors would not be properly logged or handled.

4. **Response Handling**:
   - The original code used `res.send(JSON.stringify(out))`, which is unnecessary. Express provides `res.json()` to directly send JSON responses.

5. **Server Start Logging**:
   - The original code did not log when the server started, which is useful for debugging and confirmation that the server is running.
