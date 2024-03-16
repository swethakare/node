// const event = require('event');
const EventEmitter = require('events');
const http = require('http');

const eventEmitter = new EventEmitter();

eventEmitter.on('eve',()=>{
    console.log("this is an event occurance");
})

eventEmitter.emit('eve');
