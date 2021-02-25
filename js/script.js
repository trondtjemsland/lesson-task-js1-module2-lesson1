function receivingFunction(kindOfArgument) {
  console.log('This is a ' + typeof kindOfArgument);
}

function callbackFunction() {
  console.log('I am a callback function');
}

receivingFunction(callbackFunction);

//Question 2

const prizes = ['Bag of bananas', 'Box of frogs', 'Car of clowns'];

for (let i = 0; i < prizes.length; i++) {
  console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

prizes.forEach(function (item, index) {
  console.log('Prize ' + index + ': ' + item);
});

// Question 3

function makeSomething() {
  document.querySelector('main').innerHTML = `
        <h1>I am a Heading</h1>
     `;
}

setTimeout(makeSomething, 5000);
