# Node.js and Express

Tags: Interviewing
Created time: July 7, 2024 4:23 PM
Last edited time: July 7, 2024 9:46 PM

# Node.js vs Express

- Express JS is a web application framework for Node.js.
- Express JS is designed for building web applications and APIs.
- Express JS enhances Node.js by providing additional features like simplified routing and middleware support.

# Setting up a vanilla Node.js Server

- Builtin node:http module allows us to make Servers
- First import http
- Create server using http.createServer(handler)
- Listen for requests on a specific port

```tsx
import http from "node:http";

const server = http.createServer((request, response) => {
	console.log(request, response);
});

server.listen(3300);
```

# Setting up a basic Express Server

- To set up a basic Express JS server requires an Express module.
- Create an instance of Express, define routes, and listen on a specific port.
- This process establishes a server capable of handling requests and sending responses.

```tsx
import express, { Request, Response } from "express";

const app = express();

app.use((request: Request, response: Response) => {
  response.send("Hello, World!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

# Versioning in Express APIs

- Versioning in Express JS APIs is handled by defining different routes for each version.
- The custom middleware can also be used to manage versioning through request headers.

```tsx
app.use("/api/v1/users", router);
```

# Routing in Express

- Routing in Express JS is crucial in directing traffic within the applications.
- Routing in Express JS defines how an application responds to a client request to a particular endpoint.
- Implementation of a route in Express JS involves using methods of the object corresponding to HTTP methods and defining callback functions that execute when a route is matched.

```tsx
// router.ts
import { Request, Response, Router } from "express";

export const router = Router();

router.get("users", (req: Request, res: Response) => {
  res.send(["Jack", "John"]);
});

router.post("users", (req: Request, res: Response) => {
  const { user } = req.body;
  console.log(user);
});

// index.ts
import express, { Request, Response } from "express";
import { router } from "./router";

const app = express();

app.use("/api/v1/users", router);

app.listen(3000, () => console.log("Server running on port 3000"));
```

# File IO in Node.js

## Reading from a File

```tsx
import fs from "node:fs/promises";

try {
  const data = await fs.readFile("./src/router.ts", "utf-8");
  console.log(data);
} 

catch (error) {
  console.log("Error reading the file.");
}
```

## Writing to a File

```tsx
await fs.writeFile("./src/file.ts", data, "utf-8");
```

## Appending to a File

```tsx
await fs.appendfile("./src/file.ts", data, "utf-8");
```

## Unlinking a Symlink or Deleting a File

```tsx
await fs.unlink("./src/file.ts");
```

## Renaming a File

```tsx
await fs.rename('old/path/to/file.txt', 'new/path/to/file.txt')
```

## Checking if a file exists

```tsx
await fs.access("./src/index.ts", fs.constants.F_OK);
```

# Serving Static Files

```tsx
// Serve individual file
app.get('/file', (req, res) => {
  res.sendFile('./public/example.txt');
});

// Serve all files under a directory
app.use('/public', express.static('./public/')));

// Custom 404 handler for static files
app.use((req, res, next) => {
  res.status(404).send('File not found');
});
```

# app.use()

- The 'app.use()' method in Express JS is used to mount middleware functions to the application.
- The 'app.use()' method applies middleware to every request in the application, such as logging, parsing, and session handling.

# Middleware

- Middleware in Express JS serves as a function that has access to the request and response objects.
- Middleware can modify requests and responses, end the request-response cycle, or call the next middleware in the stack.
- Middleware enables powerful request processing capabilities in Express JS applications.

## Application Level Middleware

- Application-level middlewares are bound to the `app` object using `app.use()` or related methods (`app.get()`, `app.post()`, etc.) and are executed for every request to the server.
    
    ```tsx
    import express from 'express';
    
    const app = express();
    
    // Application-level middleware
    app.use((req, res, next) => {
      console.log('Time:', Date.now());
      next(); // Pass control to the next middleware or route handler
    });
    
    // Route handler
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
    
    ```
    

## Route Level Middleware

- Route-level middlewares are applied to specific routes using `app.use()` or related methods, and they are only active for requests that match the specified route(s).
    
    ```tsx
    import express from 'express';
    
    const app = express();
    
    // Route-level middleware
    const checkAuth = (req, res, next) => {
    	// Replace with actual authentication logic
      const isAuthenticated = true;
      if (!isAuthenticated) {
        return res.status(401).send('Unauthorized');
      }
      next();
    };
    
    // Route handler using middleware
    app.get('/secure', checkAuth, (req, res) => {
      res.send('This is a secure route');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
    
    ```
    

## Error Handling Middleware

- Error handling middlewares are defined with four parameters `(err, req, res, next)` and are used to handle errors that occur during the request-response cycle.
- They are defined at the end of all other middlewares and route handlers, using `app.use()` with four parameters.

```tsx
// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Error handling middleware for 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

```

# Environment Variables

1. Create the .env file

```tsx
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
```

1. Create the config loader

```tsx
import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  port: process.env.PORT || 3300,
  db: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  },
};
```

1.  Use the config Loader

```tsx
import express, { Request, Response } from "express";
import { router } from "./router";
import { appConfig } from "./config";

const app = express();

app.use("/api/v1/users", router);

app.listen(appConfig.port, () => console.log("Server running on port 3000"));
```

# Req and Res Objects

- The 'req' (request) and 'res' (response) objects in Express JS are central entities to handle HTTP requests and responses.
- The 'req' object provides details about the HTTP request.
- The 'res' object is used to return data to the client.

# Reading HTTP Request Inputs from the client

## Reading Route Parameters

- Route parameters are part of the URL path defined in the Express route.
- They are specified using a colon (`:`) followed by the parameter name.
    
    ```tsx
    // Route with route parameter
    app.get('/users/:userId', (req, res) => {
      const userId = req.params.userId; // Access route parameter
      res.send(`User ID: ${userId}`);
    });
    ```
    
- `/users/:userId` defines a route with a route parameter `userId`.
- `req.params.userId` accesses the value of the `userId` parameter when the route is matched (e.g., visiting `/users/123` would set `userId` to `123`).

## Reading Request Body

- To read the request body in Express, you need to use middleware like `express.json()` or `express.urlencoded()` to parse incoming request bodies based on content type.
    
    ```tsx
    // POST route to handle JSON request body
    app.post('/api/users', (req, res) => {
      const userData = req.body; // Access request body
      console.log(userData);
      res.json(userData);
    });
    ```
    

## Reading Query String Data

- Query string data is part of the URL after the `?` character and consists of key-value pairs.
- Visiting `/search?q=express` would set `searchTerm` to `'express'`.
    
    ```tsx
    // GET route to handle query string parameters
    app.get('/search', (req, res) => {
      const searchTerm = req.query.q; // Access query string parameter 'q'
      res.send(`Search term: ${searchTerm}`);
    });
    ```
    

## Reading Request Header

- Request headers contain metadata about the request, such as content type, user agent, etc.
- You can access headers using `req.headers`.
    
    ```tsx
    // Route to access request headers
    app.get('/headers', (req, res) => {
      const userAgent = req.headers['user-agent']; // Access User-Agent header
      res.send(`User Agent: ${userAgent}`);
    });
    ```
    

## Reading Cookies

- Cookies are stored on the client-side and are sent with every request to the server.
- You can access cookies using `req.cookies` after configuring cookie-parser middleware.
    
    ```tsx
    // Install middleware first
    pnpm install cookie-parser
    
    // Route to read cookies
    app.get('/cookies', (req, res) => {
      const cookieValue = req.cookies.cookieName; // Access cookie 'cookieName'
      res.send(`Cookie Value: ${cookieValue}`);
    });
    ```
    

# Handle File Uploads

- Handling file uploads in Express JS typically requires middleware like multer or body-parser.
- The `multer` or body-parser middleware processes incoming files and makes them available in the req.file or req.files object.
- This allows the application to save, manipulate, or respond to file uploads.
    
    ```tsx
    import express, { Request, Response } from "express";
    import { v4 as uuid } from "uuid";
    import { router } from "./router";
    import { appConfig } from "./config";
    
    // 1. Import multer
    import multer from "multer";
    
    const app = express();
    
    // 2. Use a storage type
    const storage = multer.diskStorage({
      destination: "uploads",
      filename(
        req: Request,
        file: Express.Multer.File,
        callback: (err: Error | null, filename: string) => void
      ) {
        const prefix = uuid();
        callback(null, prefix + "-" + file.originalname);
      },
    });
    
    // 3. Create multer middleware using the storage
    const upload = multer({ storage: storage });
    
    // 4. Create endpoint for handling file upload
    app.post("/upload", upload.single("image"), (req: Request, res: Response) => {
      res.json({ status: "Success" });
    });
    
    app.listen(appConfig.port, () => console.log("Server running on port 3000"));
    ```
    

# CORS

- Enabling CORS (Cross-origin resource sharing) in an Express JS application involves setting HTTP headers that allow cross-origin requests.
- The CORS can be set up manually by setting headers like Access-Control-Allow-Origin or by using middleware like `Cors`.

# Managing Sessions

- Creating and managing sessions in Express JS requires session middleware like express-session.
- The express-session middleware stores session data on the server and sends a session ID to the client.
- The session ID is usually a cookie.
- The session ID enables the application to maintain stateful interactions with users.
    
    ```tsx
    import session from 'express-session';
    
    app.use(session({
      secret: 'your-secret-key', // Replace with your secret key
      resave: false, // Avoid resaving session if it hasn't been modified
      saveUninitialized: true, // Save uninitialized sessions
      cookie: { secure: false } // Set to true if using HTTPS
    }));
    
    app.get('/', (req, res) => {
      // Set a session variable
      if (req.session.views) {
        req.session.views++;
        res.send(`<p>Views: ${req.session.views}</p>`);
      } else {
        req.session.views = 1;
        res.send('Welcome to the session demo. Refresh page!');
      }
    });
    ```
    

# Cookies

- Handling cookies in Express JS requires cookie-parser middleware.
- The cookie-parser middleware parses cookies attached to the client request and makes them available in the req.cookies object.
- The cookie-parser middleware facilitates the management of session data and user preferences.
    
    ```tsx
    import express from 'express';
    import cookieParser from 'cookie-parser';
    
    const app = express();
    const port = 3000;
    
    // Set up cookie-parser middleware
    app.use(cookieParser('your-secret-key'));
    
    // Route to set a cookie
    app.get('/set-cookie', (req, res) => {
      res.cookie('name', 'value', { 
        maxAge: 900000, 
        httpOnly: true, 
        signed: true // For signed cookies
      });
      res.send('Cookie has been set');
    });
    
    // Route to get a cookie
    app.get('/get-cookie', (req, res) => {
      const name = req.cookies.name;
      const signedName = req.signedCookies.name; // For signed cookies
      res.send(`Cookie value: ${name}, Signed cookie value: ${signedName}`);
    });
    
    // Route to clear a cookie
    app.get('/clear-cookie', (req, res) => {
      res.clearCookie('name');
      res.send('Cookie has been cleared');
    });
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```
    

# Streaming Data (E.g. Video)

- The process of streaming data in an Express JS application includes using Node.js streams to handle large data sets or files efficiently.
- Express JS supports data streaming by piping streams directly to the response object.
- The piping method enables efficient data transfer without consuming excessive memory.

```tsx
import express, { Request, Response } from "express";
import fs from "node:fs/promises";
import { createReadStream } from "node:fs";

import { appConfig } from "./config";

const app = express();

app.get("/video", async (req: Request, res: Response) => {
  const path = "./media/videos/file.mp4";

  try {
    const stat = await fs.stat(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace("/bytes", "").split("-");
      const start = parseInt(parts[0]!);
      const end = parts[1] ? parseInt(parts[1]) : fileSize - 1;
      const chunkSize = end - start + 1;

      const file = await fs.open(path, "r");
      const buffer = Buffer.alloc(chunkSize);

      await file.read(buffer, 0, chunkSize, start);
      await file.close();

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4",
      });
      res.end(buffer);
    } else {
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
      });
      createReadStream(path).pipe(res);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(appConfig.port, () => console.log("Server running on port 3000"));

```

# Handling Complex JSON payloads

- Express JS middleware for handling complex JSON payloads includes the use of body-parser middleware.
- The body-parser middleware ensures the payload is parsed accurately before processing the request.

# Structuring Large Scale Express Application

- Best practices for structuring a large-scale Express JS application include modularizing code into different routes and using middleware for common functionality.
- The MVC (Model-View-Controller) architectural pattern makes code structured and modular.

# WebSockets Integration

- The WebSocket establishes a persistent connection between the client and the server.
- The WebSocket communication in an Express JS application can be integrated through libraries like [socket.io](http://socket.io/).
    
    ```tsx
    import express from 'express';
    import http from 'http';
    import { Server } from 'socket.io';
    
    const app = express();
    const port = 3000;
    
    // Create HTTP server
    const server = http.createServer(app);
    
    // Integrate socket.io
    const io = new Server(server);
    
    // Handle client connections
    io.on('connection', (socket) => {
      console.log('a user connected');
    
      // Handle disconnection
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    
      // Handle custom events from clients
      socket.on('message', (msg) => {
        io.emit('Hello, Client!', msg); // Broadcast the message to all clients
      });
    });
    
    // Start the server
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```
    

# Microservice Architecture

- **Project Structure**: Organize your monorepo into separate package for each service
- **Initialize Services**: Initialize Node.js projects for each service and set up TypeScript.
- **Express Server**: Create an Express server in each service with its own routes.
- **Run Services**: Start each service individually.
- **Communication**: Use HTTP requests for inter-service communication.
- **Dockerize**: Create Dockerfiles for each service to ensure independent deployment.
- **Docker Compose**: Use Docker Compose to manage and run multiple services together.

# Authentication and Authorization Strategies

### 1. **Basic Authentication**

- **Description**: Involves sending the user's credentials (username and password) as a Base64-encoded string in an HTTP header.
- **Use Case**: Simple, low-security applications or internal services.
- **Pros**: Easy to implement.
- **Cons**: Not secure unless used over HTTPS, credentials are exposed on every request.

### 2. **Token-Based Authentication**

- **Description**: Uses tokens (e.g., JSON Web Tokens, JWT) for authentication. The server issues a token upon successful login, which the client stores and sends with each request.
- **Use Case**: APIs, single-page applications (SPAs).
- **Pros**: Stateless, scalable, tokens can carry user information.
- **Cons**: Requires secure token storage on the client side.

### 3. **OAuth (Open Authorization)**

- **Description**: A framework that allows third-party services to exchange information without exposing user credentials. OAuth 2.0 is the latest version.
- **Use Case**: Third-party integrations (e.g., logging in with Google, Facebook).
- **Pros**: Secure, widely adopted, allows delegated access.
- **Cons**: Complex implementation, requires proper handling of token expiration and refresh.

### 4. **OAuth2 with OpenID Connect**

- **Description**: Extends OAuth 2.0 for authentication, allowing the retrieval of user identity information.
    - **Issuer Discovery**: The OIDC client discovers the provider's configuration via its `.well-known/openid-configuration` endpoint.
    - **Client Registration**: The client is registered with the OIDC provider using a client ID and client secret.
    - **Authorization Request**: The client redirects the user to the OIDC provider's authorization endpoint with the appropriate scopes and parameters.
    - **Token Exchange**: The client exchanges the authorization code for tokens (ID token and access token).
    - **UserInfo Request**: The client requests user profile information from the UserInfo endpoint using the access token.
- **Use Case**: Applications needing both authentication and authorization.
- **Pros**: Provides user information, supports SSO (Single Sign-On).
- **Cons**: Complex setup, requires understanding of both OAuth 2.0 and OpenID Connect.

### 5. **API Key Authentication**

- **Description**: Uses a unique key for each client to authenticate API requests.
- **Use Case**: Public APIs, services without user accounts.
- **Pros**: Simple to implement, good for service-to-service communication.
- **Cons**: Key management can be cumbersome, not ideal for user authentication.

### 6. **Session-Based Authentication**

- **Description**: The server creates a session for the user upon login and stores session data on the server. The client holds a session identifier (usually in a cookie).
- **Use Case**: Traditional web applications.
- **Pros**: Secure (sessions can be invalidated), easy to implement with frameworks.
- **Cons**: Requires server-side session storage, can be less scalable.

### 7. **Multi-Factor Authentication (MFA)**

- **Description**: Requires two or more verification methods for user authentication (e.g., password + SMS code).
- **Use Case**: Applications requiring high security (e.g., banking, corporate systems).
- **Pros**: Adds an extra layer of security.
- **Cons**: Can be inconvenient for users, implementation complexity.

### 8. **Biometric Authentication**

- **Description**: Uses biometric data (e.g., fingerprints, facial recognition) to authenticate users.
- **Use Case**: High-security applications, mobile apps.
- **Pros**: High security, user convenience.
- **Cons**: Requires specialized hardware, privacy concerns.

### 9. **Social Login**

- **Description**: Allows users to log in using their social media accounts (e.g., Google, Facebook, Twitter).
- **Use Case**: Consumer-facing applications to simplify user onboarding.
- **Pros**: Convenient for users, can reduce the friction of account creation.
- **Cons**: Dependence on third-party services, data privacy considerations.

### 10. **SAML (Security Assertion Markup Language)**

- **Description**: An XML-based framework for exchanging authentication and authorization data between parties, typically used for SSO.
- **Use Case**: Enterprise environments with SSO requirements.
- **Pros**: Supports SSO, secure, widely adopted in enterprise applications.
- **Cons**: Complex to implement, typically requires enterprise infrastructure.

# Custom Error Classes

- Creating custom error classes in JavaScript/TypeScript allows you to handle different error types more effectively, providing better error reporting and debugging capabilities.
- Here's how you can create custom error classes in both JavaScript and TypeScript:

```tsx
class ValidationError extends Error {
  constructor(message, invalidFields) {
    super(message);
    this.name = this.constructor.name;
    this.invalidFields = invalidFields;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage
try {
  throw new ValidationError('Invalid input', ['username', 'password']);
} catch (error) {
  console.error(error.name); // ValidationError
  console.error(error.message); // Invalid input
  console.error(error.invalidFields); // ['username', 'password']
  console.error(error.stack); // Stack trace
}
```

# Logging and monitoring

First, install Winston and its dependencies:

```
pnpm i winston
```

Then create logger.js file

```tsx
import { createLogger, transports, format } from 'winston';

// Define log format
const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

// Create a logger instance
export const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' })
  ],
});

```

Then use it in express:

```tsx
import express from "express";
import { logger } from "./logger";

const app = express();

// Example route throwing an error
app.get('/', (req, res, next) => {
  try {
    throw new Error('Test error');
  } catch (error) {
    logger.error(`Error occurred: ${error.message}`);
    next(error);
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  logger.error(`Unhandled error: ${error.message}`, { error }); // Log error
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

```

# Concurrency

### 1. Cluster

In Node.js, the `cluster` module allows you to create multiple instances of a Node.js process to handle the load across CPU cores. It provides a straightforward way to scale a Node.js application across all available cores, thereby improving performance and concurrency.

- **Usage**: Typically, you use the `cluster` module to fork multiple instances of your Node.js application. One instance acts as the master process, and the rest are worker processes.
- **Master Process**: The master process coordinates the worker processes, manages their lifecycle, and distributes incoming connections or tasks among them.
- **Worker Processes**: Each worker process runs a copy of the main application. They share the same server port and handle incoming requests concurrently.

### Example of Using Cluster

```jsx
javascriptCopy code
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers based on available CPU cores
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker exit and restart
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Worker processes can share any TCP connection
  // In this case, an HTTP server
  const http = require('http');
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

```

### 2. Workers

Workers in Node.js refer to instances of the application that are spawned by the cluster module. Each worker runs in its own process and handles incoming requests independently. They can share server ports and manage connections concurrently.

- **Worker Communication**: Workers can communicate with the master process and with each other using inter-process communication (IPC) channels.
- **Shared State**: Workers do not share memory directly but can communicate using IPC and message passing.

### 3. Child Processes

In Node.js, Child Processes are separate instances of the Node.js process spawned using the `child_process` module. They are different from workers spawned by the `cluster` module.

- **Purpose**: Child processes are typically used for executing CPU-intensive tasks, running shell commands, or executing other scripts independently.
- **Communication**: Child processes communicate with the parent process using standard input/output streams (IPC), which can be bidirectional.

### Example of Using Child Processes

```jsx
javascriptCopy code
const { fork } = require('child_process');
const path = require('path');

// Fork a new child process
const childProcess = fork(path.join(__dirname, 'worker.js'));

// Send data to child process
childProcess.send({ message: 'Hello, child process!' });

// Receive data from child process
childProcess.on('message', (message) => {
  console.log('Message from child process:', message);
});

```

### Summary

- **Cluster**: Manages multiple instances of the Node.js application across CPU cores, improving concurrency and performance.
- **Workers**: Instances of the application spawned by the cluster module, sharing server ports and handling requests independently.
- **Child Processes**: Independently spawned processes using the `child_process` module, used for executing CPU-intensive tasks or running scripts outside the main Node.js process.

# Thread Pools

1. **Purpose**: The thread pool in Node.js is used to offload blocking I/O operations, such as file system operations (`fs` module), network operations (`http`/`https` modules), and some cryptographic operations, to native threads managed by libuv.
2. **Default Size**: The size of the thread pool is determined by default settings in libuv, which may vary across different versions of Node.js and operating systems. For example, it might be around 4 threads per core, but this can be adjusted.
3. **Usage**: When a Node.js application performs an asynchronous I/O operation (like reading a file), it delegates the operation to the thread pool. This allows the main Node.js event loop to continue processing other tasks without waiting for the I/O operation to complete.

### Adjusting the libuv Thread Pool Size

The size of the libuv thread pool can be adjusted using environment variables when starting your Node.js application. Here’s how you can modify it:

### 1. `UV_THREADPOOL_SIZE` Environment Variable

You can set the `UV_THREADPOOL_SIZE` environment variable to specify the number of threads in the libuv thread pool. This setting affects how many concurrent I/O operations can be handled simultaneously.

- **Example Command**:This command sets the thread pool size to 8 threads. Adjust the number (`8` in this case) based on your application’s I/O needs and hardware capabilities.
    
    ```bash
    bashCopy code
    UV_THREADPOOL_SIZE=8 node app.js
    
    ```
    

### 2. Considerations

- **Performance**: Increasing the thread pool size may improve the performance of your application if it performs many simultaneous I/O operations. However, it also consumes more system resources (CPU and memory).
- **Optimization**: Node.js and libuv manage the thread pool internally based on workload and system conditions. Adjusting the thread pool size is usually done for specific optimization needs, such as fine-tuning performance for high-concurrency applications.

### Important Notes

- **Default Behavior**: Node.js and libuv typically manage the thread pool size automatically based on system capabilities. Setting `UV_THREADPOOL_SIZE` should be done with caution and after profiling your application’s I/O patterns.
- **Platform Differences**: The behavior of libuv and the thread pool may vary slightly across different operating systems and Node.js versions. Always refer to the documentation specific to your environment.

# Rate Limiting

Install the middleware

```tsx
npm install express-rate-limit
```

In your Express application (`app.js` or `index.js`), configure the rate limiting middleware:

```tsx
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define a rate limiter with specific options
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, try later'
});

// Apply the rate limiter to all requests
app.use(limiter);

// Other middleware and routes
app.get('/api/resource', (req, res) => {
  res.send('Resource accessed successfully');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(429).send('Rate limit exceeded'); // 429: Too Many Requests
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

# Data Validation and Sanitization

## Define Schema

```tsx
import { z } from 'zod';

// Define a schema for user registration data
const signUpSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});
```

## Validate Data using Parse

```tsx
const userData = {
  username: 'user123',
  email: 'user@example.com',
  password: 'password123',
};

try {
  signUpSchema.parse(userData); // Validate and parse data
  console.log('Data is valid:', userData);
} catch (error) {
  console.error('Validation error:', error.errors);
}
```

## Sanitize Data (E.g. Removing spaces)

```tsx
const userData = {
  username: '   user123   ',
  email: '   user@example.com   ',
  password: 'password123   ',
};

try {
  const parsedData = signUpSchema.parse(userData);
  const sanitizedData = {
    username: parsedData.username.trim(),
    email: parsedData.email.trim(),
    password: parsedData.password.trim(),
  };
  console.log('Sanitized data:', sanitizedData);
} catch (error) {
  console.error('Validation error:', error.errors);
}
```

# GraphQL Integration

```tsx
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Define type definitions (schema)
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    greet(name: String!): String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
  },
  Mutation: {
    greet: (_, { name }) => `Hello, ${name}!`,
  },
};

// Create an ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });

// Initialize Express app
const app = express();

// Apply ApolloServer middleware to Express app
server.applyMiddleware({ app });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
```

# Performance Optimization

- Caching Responses
- Caching DB Queries
- GZ compression of response
- Using Object Pools
- Disabling analytics, logging and monitoring

# Protection against common web vulnerabilities

## 1. Injection Attacks

### Types:

- **SQL Injection (SQLi)**: Attackers inject SQL queries through input fields to manipulate or disclose data.
- **NoSQL Injection**: Similar to SQLi but targets NoSQL databases like MongoDB.

### Protection:

- **Use Parameterized Queries**: Parameterized queries help prevent SQL injection by separating SQL code from user input.
- **Validate and Sanitize Input**: Use libraries like `express-validator` or frameworks like Zod to validate and sanitize user inputs.
- **Avoid Dynamic Queries**: Avoid constructing SQL queries using string concatenation with user input.

## 2. Cross-Site Scripting (XSS)

### Types:

- **Reflected XSS**: Malicious scripts are injected into web pages and executed when users visit the page.
- **Stored XSS**: Scripts are stored on the server and executed when accessed by users.

### Protection:

- **Sanitize User Input**: Sanitize and escape user inputs to prevent execution of injected scripts.
- **Content Security Policy (CSP)**: Implement CSP headers to specify which resources can be loaded and prevent loading of unauthorized scripts.
- **Use XSS Protection Libraries**: Libraries like `helmet` for Express can add XSS protection headers automatically.

## 3. Cross-Site Request Forgery (CSRF)

### Types:

- **CSRF**: Malicious sites perform actions on behalf of authenticated users by exploiting their active sessions.

### Protection:

- **Use CSRF Tokens**: Implement CSRF tokens and validate them on every state-changing request (POST, PUT, DELETE).
- **SameSite Cookies**: Set cookies with `SameSite` attribute to prevent CSRF attacks by restricting cookie access.
- **Origin Validation**: Validate request origins and referer headers to ensure requests are coming from expected sources.

## 4. Authentication and Authorization Issues

### Types:

- **Weak Authentication**: Weak or default credentials lead to unauthorized access.
- **Broken Access Control**: Improperly enforced restrictions on what authenticated users can do.

### Protection:

- **Use Secure Authentication Mechanisms**: Implement strong password policies, multi-factor authentication (MFA), and session management best practices.
- **Role-Based Access Control (RBAC)**: Enforce strict access control based on roles and permissions.
- **Regular Security Audits**: Conduct regular security audits and vulnerability assessments.

## 5. Insecure Dependencies

### Types:

- **Outdated Libraries**: Use of outdated or vulnerable libraries and dependencies.
- **Malicious Packages**: Inclusion of malicious packages in the application’s dependencies.

### Protection:

- **Regular Dependency Scanning**: Use tools to scan for vulnerabilities in dependencies (e.g., `npm audit`).
- **Update Dependencies**: Regularly update dependencies to their latest secure versions.
- **Use Package Lock Files**: Lock down dependency versions using `package-lock.json` or `yarn.lock`.

## Additional Best Practices:

- **Secure Headers**: Set security-related headers (e.g., `X-Content-Type-Options`, `Strict-Transport-Security`) to prevent certain types of attacks.
- **Error Handling**: Implement proper error handling to avoid leaking sensitive information in error messages.
- **Logging and Monitoring**: Monitor server logs for suspicious activities and implement logging mechanisms to track security events.

# Helmet middleware

- Helmet middleware in Express is a crucial tool for enhancing the security of your web applications by automatically setting HTTP headers that help protect against various attacks.
- By using Helmet, you can strengthen your application’s defenses against common web vulnerabilities such as XSS, clickjacking, MIME-sniffing, and more.
- Integrating Helmet with your Express application is simple and effective, providing immediate security benefits with minimal configuration overhead.