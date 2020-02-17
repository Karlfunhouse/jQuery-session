// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

console.log($('p').text())


// In the JS file:
// 1. Rewrite the event handlers on each of the buttons into jQuery code.
${'button'}.on('click', function(e) {
  e.preventDefault()
})

${'#clear-btn'}.on('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})

// 2. Listen for an `input` event on all inputs on the page. When the event fires, save that input's value to local storage

  ${'input'}.on('change', )

// 3. When the page loads, set the value of the inputs to what was saved in local storage


// 4. When you click the clear button, clear local storage as well.
