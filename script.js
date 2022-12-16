const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click' , function () {
    for (let i=0; i< navbarLinks.length ; i++) {
        navbarLinks[i].classList.toggle('active');
    }
});  


//btn scroll to the top
// const btnScrollToP = document.querySelector('#btn-top');

// btnScrollToP.addEventListener('click', function (){
  
//   window.scrollTo({
//     top:0,
//     left:0,
//     behavior: "smooth"
//   });
// });

//Preloader
 var preloader = document.getElementById("preloader");
 var postionSpinner = document.getElementById("position-spinner");
 var spinner = document.getElementById("spinner");

  window.addEventListener('load', function(){

    preloader.classList.remove('preloader')
    postionSpinner.classList.remove('position-spinner')
    spinner.classList.remove('spinner')
   })

   //current year
  //  const d = new Date();
  // let year = d.getFullYear();
  // document.getElementById("current-year").innerHTML = year;


//sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

 
 

