const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Determine the current maximum number of event listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current maximum number of event listeners:', currentMaxListeners);

// Set the maximum number of event listeners to 5
eventEmitter.setMaxListeners(5);
console.log('Maximum number of event listeners set to 5');
