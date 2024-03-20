const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:

Node.js follows a single-threaded event-driven architecture that uses non-blocking I/O operations, making it efficient for handling concurrent connections. 
It is built on the V8 JavaScript engine, developed by Google, which compiles JavaScript code into native machine code. 
Node.js uses an event loop to handle asynchronous operations, allowing it to process multiple requests concurrently without creating new threads for each request. 
This architecture makes Node.js suitable for building scalable and high-performance applications.
`;

// Write information about Node.js architecture to a new file
fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('Node.js architecture information has been written to nodejs_architecture.txt');
  }
});

// Read the content of the nodejs_architecture.txt file
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('Content of nodejs_architecture.txt:');
    console.log(data);
  }
});
/*
const filePath = 'nodejs_architecture.txt';

// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist.');
    return;
  }

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File Deleted Successfully');
    }
  });
});
*/

const os = require('os');


const osName = os.platform();

const osRelease = os.release();


console.log('Operating System:', osName);
console.log('Release Version:', osRelease);



const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe',() => {
    eventEmitter.emit("Subscribe", "Collage Wallah");
    console.log('Thanks for subscribing to collage wallah');
});

eventEmitter.emit('subscribe');


// Define an event handler function
const eventHandler = () => {
  console.log('Event handler is called!');
};

eventEmitter.on('myEvent', eventHandler);

eventEmitter.emit('myEvent');

eventEmitter.off('myEvent', eventHandler);

eventEmitter.emit('myEvent');

