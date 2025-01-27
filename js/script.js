`use strict`
const greetingMessage = `Im learning to code with Javascript`; 

try{
    greetingMessage = `I want to become a good Javascript programmer`;
} catch (error) {
    console.log(`Error:`, error.message);
}

console.log(`Greeting message remains:`, greeting);
