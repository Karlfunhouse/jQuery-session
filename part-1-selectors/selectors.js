let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})

// 1. Select all the labels and give them a class of "green"
$('label').addClass('green')

// 2. Select all of the `phone` inputs and give them a class of "yellow"
$(".phone").addClass("yellow")

// 3. Select the label for the email input and give it a class of "blue"
$("label[for='email']").addClass('blue').removeClass('green')

// 4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)

const checkedID = $("input[type='checkbox']:checked").attr("id")
console.log(checkedID);

// 5. Give all labels inside of a p tag a class of "purple"

$("p").find("label").addClass("purple")
// 6. Give the Clear button a class of red

$("#clear-btn").addClass('red')
