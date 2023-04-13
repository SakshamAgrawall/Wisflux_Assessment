# Express Quiz 

## Theory Questions

Q1. What is NodeJS?

Ans. Node.js is an open-source platfrom use to run javascript in in our local computer it use V8 engine to run javascript. 

Q2. What is V8 Engine?

Ans. it is a power full open source engine to run javascript in the browser it is made by chrome in c++ prgramming language.

Q3. What is Event Loop in NodeJS?

Ans. Even loop in nodejs is to run the server continuous the example to event loop is event lisenter.

Q4. What is the use of tsconfig.json file?

Ans. The tsconfig.json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig.json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default

Q5. What are the methods provided by fs module to manipulate files?

Ans. The fs module provides a lot of very useful functionality to access and interact with the file system. There is no need to install it. Being part of the Node.js core.

here is some method of `fs module :

* fs.access(): check if the file exists and Node.js can access it with its permissions
* fs.appendFile(): append data to a file. If the file does not exist, it's created
* fs.open(): opens the file and returns a file descriptor to allow file manipulation
* fs.readdir(): read the contents of a directory
* fs.readFile(): read the content of a file. Related: fs.read()
* fs.readlink(): read the value of a symbolic link
* fs.realpath(): resolve relative file path pointers (., ..) to the full path
* fs.rename(): rename a file or folder
* fs.utimes(): change the timestamp of the file identified by the filename passed. Related: fs.futimes()
* fs.writeFile(): write data to a file. Related: fs.write()

Q6. What is API?

Ans. API stands for application programming interface, which is a set of definitions and protocols for building and integrating application software. 

Q7. What is JSON format?

Ans. JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.

Q8. Why we use JSON format for API?

Ans. JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.

Q9. What is a Framework?

Ans. A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.

Q10.  How an HTTP Communication works?

Ans. HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.

Q11. What is Middleware in ExpressJS?
Ans. Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.