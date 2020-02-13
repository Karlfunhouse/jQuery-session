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

console.log($('p').text())


// Within the JS file, use jQuery to:
// 1. Modify the inner text of the 'Save Contact' button to say "Add New Buddy"

$("button[type='submit']").text('Add New Buddy')
// 2. Make the check box labels more enthusiastic (ex: `Yes!!!` or `No!!!`)

$("label[for='confirm']").text('Heavens Yes!')
$("label[for='deny']").text('Hell No!')
// 3. Give all of the inputs default values when the page loads (not placeholders -- actual values)
$("input").val('SUP HOMIE?')
$(".phone").val('111')

// 4. Select both headings (h1 and h2) and change them to say "Contact Form".

$("h1, h2").text("Contact Form")
// 5. Commit your changes!
