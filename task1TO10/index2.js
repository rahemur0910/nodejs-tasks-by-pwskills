const fs = require('fs');

// Additional advantages of Node.js
const additionalAdvantages = `
Additional Advantages of Node.js:

1. Asynchronous and Event-Driven: Node.js is based on an asynchronous, event-driven architecture which allows handling multiple concurrent connections efficiently.

2. Single Programming Language: Node.js allows developers to write both client-side and server-side code in JavaScript, enabling full-stack development with a single programming language.

3. Large Ecosystem of Modules: Node.js has a vast ecosystem of npm modules, which allows developers to easily extend the functionality of their applications by leveraging existing packages.

4. Community Support: Node.js has a large and active community of developers who contribute to its growth by creating modules, providing support, and sharing knowledge through forums and other platforms.
`;

// Append additional advantages to the nodejs_architecture.txt file
fs.appendFile('nodejs_architecture.txt', additionalAdvantages, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Additional advantages have been appended to nodejs_architecture.txt');
    
    // Read the updated content of the nodejs_architecture.txt file and print it to the console
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('Updated content of nodejs_architecture.txt:');
        console.log(data);
      }
    });
  }
});