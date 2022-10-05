// -------------------navbar--------------------------------------

var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg', 'a', 'shadow');
      }
      else {
        nav.classList.remove('bg', 'shadow');
      }
    });


// ----------------------submit button--------------------------------


var myform = document.getElementById('myform')
var name = document.getElementById('name')
var phone  = document.getElementById('phone')
var email  = document.getElementById('email')
var date  = document.getElementById('date')
var time  = document.getElementById('time')
var person  = document.getElementById('person')
var textarea  = document.getElementById('textarea')
var subject  = document.getElementById('subject')


var inputs = document.querySelectorAll('input')
var textarea1 = document.querySelectorAll('textarea')
var btnclear  = document.querySelector('button')


myform.addEventListener('submit',(e) => {
    e.preventDefault();
    alert('your table is booked')
    inputs.forEach(input => input.value = '');
    textarea1.forEach(input => input.value = '');
})







