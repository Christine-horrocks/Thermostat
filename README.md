# Thermostat

## This is a project aimed at learning JavaScript 

## Learning aims in this challenge

To be able to answer 'yes' to these questions in JavaScript

Can you read and write JavaScript syntax?

Can you understand the rules that govern the behaviour of the this keyword?

Can you encapsulate behaviour in JavaScript?

Can you get visibility effectively in JavaScript?

Can you TDD in JavaScript?


## Thermostat
This is the business logic to model a simple thermostat, and it is hooked up to a dynamic visual interface using jQuery - all within the browser. Data is added by the user and displayed on the page. The testing framework Jasmine was used to test-drive the development of the code.

### Specification:

Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

### How to use the webpage:

Clone this repository to your own machine

```
$ git clone git@github.com:Christine-horrocks/Thermostat.git
```

Navigate to the foulder in your Finder and open the thermostat.html file using a web browser. 


### Positives: 
- I was able to use JavaScript syntax to write the business logic.
- I was able to TDD the business logic using Jasmine .
- I was able to use JQuery to hook up the interface. 
- I was able to create a working webpage. 

### Areas to work on: 
- Need to find a way to add errors to let users know why they cannot increase or decrease the temperature at certain times. 
- Need to make the page more attractive.  
