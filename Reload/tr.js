let openButton = document.getElementById('sup')
let closeButton = document.getElementById('winbut')
let overlay = document.getElementById('overlay')

openButton.addEventListener('click', () => {
    document.querySelector('.win').classList.add('active')
    overlay.classList.add('active')
  })

closeButton.addEventListener('click', () => {
    document.querySelector('.win').classList.remove('active')
    overlay.classList.remove('active')
})


window.addEventListener('scroll', () => {
    let form = document.querySelector('.BuyFormm')
    let formPos = form.getBoundingClientRect().top
    let screenPos = window.innerHeight
    let news = document.querySelector('.FirstNews')
    let newspos = news.getBoundingClientRect().top
    let soc = document.querySelector('.footweb')
    let socpos = soc.getBoundingClientRect().top
    if(formPos < screenPos){form.classList.add('appear')}
    if(newspos < screenPos){
        let news1 = document.querySelector('.FirstNews')
        let news2 = document.querySelector('.SecondNews')
        news1.classList.add('appear')
        news2.classList.add('appear')
    }
    if(socpos < screenPos){
        let s1 = document.querySelector('.s1')
        let s2 = document.querySelector('.s2')
        let s3 = document.querySelector('.s3')
        let s4 = document.querySelector('.s4')
        let s5 = document.querySelector('.s5')
        s1.classList.add('appear')
        s2.classList.add('appear')
        s3.classList.add('appear')
        s4.classList.add('appear')
        s5.classList.add('appear')
    }
})

const form = document.querySelector('.BuyFormm')
const email = document.getElementById('email')
const name2 = document.getElementById('name2')
const phone = document.getElementById('phone')
const from = document.getElementById('from')
const to = document.getElementById('to')

form.addEventListener('submit', e => {
	e.preventDefault()
	checkInputs()
})

function checkInputs() {
	const nameValue = name2.value.trim()
	const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const fromValue = from.value.trim()
    const toValue = to.value.trim()
    let letter = /^[A-Za-z]+$/
	
	if(phoneValue === '' || !isPhone(phoneValue)) {
		setErrorFor(phone)
    } else {
		setSuccessFor(phone)
    }
    
    if(nameValue === '' || !nameValue.match(letter) ) {
		setErrorFor(name2)
    } 
    else {
		setSuccessFor(name2);
	}
	
	if(emailValue === '' || !isEmail(emailValue)) {
		setErrorFor(email)
	} else {
		setSuccessFor(email);
	}
    
    if(fromValue === '' || !fromValue.match(letter)) {
		setErrorFor(from)
	} else {
		setSuccessFor(from);
	}
    if(toValue === '' || !toValue.match(letter)) {
		setErrorFor(to)
	} else {
		setSuccessFor(to);
	}
}

function setErrorFor(input) {
	input.className = 'Form Error';
}

function setSuccessFor(input) {
	input.className = 'Form Success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone)
{
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
}
Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

document.getElementById('dateon').value = new Date().toDateInputValue();
document.getElementById('dateon').min = new Date().toDateInputValue();







$(document).ready(function(){
  $("#hid").click(function(){
      $("#hid").hide();
  });

  $('.sortable').sortable({opacity: 0.5, scroll: false, cursor: "move"});



  $(".secbl").hide();

  $(".fr").click(function () {
      $(".secbl").hide();
      $(".firstbl").show();

  });
  
  $(".scn").click(function () {
      $(".firstbl").hide();
      $(".secbl").show();

  });




  $("#city").chained("#country");

  $('.Whyareyourunning').click(function(){
    if($(this).next().hasClass("act"))
    {
        $(this).next().toggleClass("act");
        $(this).next().css({"max-height" : "0"})
    }
    else
    {
        $('.whz').css({"max-height" : "0"});
        $('.whz').removeClass("act");
        $(this).next().toggleClass("act");
        $(this).next().css({"max-height" : $(this).next().prop('scrollHeight')});
    }
})
});




let index = 0;
function check()
{
  if(index == 0){
    $('.arrl').css('opacity', '0');
  }
  else{
    $('.arrl').css('opacity', '1');
  }
}
$('.slider').css('width', ($(".slider_element").length) * 100 + '%');
$('.arrr').click(() => {
    
    if (index < $(".slider_element").length - 1) {
        index += 1
        $('.slider').css('transition', '0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-100 / $(".slider_element").length) + '%)');
    }
    else {
        index = 0
        $('.slider').css('transform', 'translate(' + (index) * (-100 / $(".slider_element").length) + '%)');
        $('.slider').css('transition', '1s');
    }
})
$('.arrl').click(() => {
    if (index > 0) {
        index -= 1
        $('.slider').css('transition', '0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-100 / $(".slider_element").length) + '%)');
      }
})
$('.arrl').click(check);
$('.arrr').click(check);