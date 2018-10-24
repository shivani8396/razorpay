
// navbar form
$('.form-navbar').on("mouseenter", function() {
  $('.hiring').hide();
  $(this).addClass('active');
}).on("mouseleave", function(){
  $('.hiring').show();
  $(this).removeClass('active');
});

//popover
$(function () {
  $('[data-toggle="popover"]').popover();
});

// Form js
$('.add-new').click(function() {
  event.preventDefault();
  
  // get the last DIV whose ID starts with ^= "pane"
  var $formId= $('div[id^="pane"]:last');
  console.log($formId);
  
  // Read the Number from that DIV's ID
  // And increment that number by 1
  var num = parseInt( $formId.prop('id').match(/\d+/g), 10 ) +1;
  console.log(num);
  
  // Clone it and assign the new ID
  var $pane = $formId.clone().prop('id', 'pane'+num);
  console.log($pane);
  
  // Finally insert pane in all after divs
  $formId.after( $pane.appendTo('.demo-form') );
  console.log('form added');
  
  // Change form heading number
  $('.heading', $pane).text('Person '+ num+ ' Details');
  // $formId.after($('.heading').text('Person'+num+ 'Details'));
  console.log('heading text changed');
  
  // Changing all input IDs dynamically
  $('.first-name', $pane).prop('id', 'firstName'+num);
  $('.last-name', $pane).prop('id', 'lasttName'+num);
  $('.mail', $pane).prop('id', 'mail'+num);
  $('.password', $pane).prop('id', 'password'+num);
  $('.select-state', $pane).prop('id', 'inputState'+num);
  $('.custom-file-input', $pane).prop('id', 'customFile'+num);
  $('.form-check-input', $pane).prop('id', 'check'+num);
  
});

// Flickity
$('.testimonial-carousel').flickity({
  // options
  cellAlign: 'center',
  pageDots: false
});

// navbar mobile

$('.menu-nav').click(function() {
  if ($(this).hasClass('open-menu')) {
    $(this).removeClass('open-menu');
    $('.navbar-menu').css('display', 'none');
    $('.nav-mobile').removeClass('backdrop');
  }
  else {
    $('.navbar-menu').css('display', 'block');
    $(this).addClass('open-menu');
    $('.nav-mobile').addClass('backdrop');
  }
});

//submenu js
$('.nav-link').click(function() {
  $(this).toggleClass('change');
});

// active class on list item
$('.navbar-nav .nav-item .nav-link').click(function() {
  $(this).toggleClass('active');
});

// remove navbar on backdrop click
$('.backdrop').click(function() {
  alert('hi');
  console.log('1');
  $('.menu-nav').removeClass('open-menu');
  $('.navbar-menu').css('display', 'none');
  // $(this).removeClass();
});

// navbar hover
$('.dropdown-toggle').mouseover(function() {
  console.log('over');
  $('.nav-box').addClass('show');
  $(this).grandparent().addClass('active');
});
$('.dropdown-toggle').mouseout(function() {
  console.log('out');
  $('.nav-box').removeClass('show');
  $(this).parent().removeClass('active');
});

//navbox hover
$('.nav-box').mouseover(function() {
  console.log('navover');
  $(this).addClass('show');
  $(this).parent().addClass('active');
});
$('.nav-box').mouseout(function() {
  console.log('navout');
  $(this).removeClass('show');
  $(this).parent().removeClass('active');
});


// // autocomplete array
// // var hobbies = ["archery", "badminton", "cricket", "dance", "football", "painting"];
// var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina",
// "Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Island"];
// function autocomplete(inp, arr) {
//   /*the autocomplete function takes two arguments,
//   the text field element and an array of possible autocompleted values:*/
//   var currentFocus;
//   /*execute a function when someone writes in the text field:*/
//   inp.addEventListener("input", function(e) {
//       var a, b, i, val = this.value;
//       /*close any already open lists of autocompleted values*/
//       closeAllLists();
//       if (!val) { return false;}
//       currentFocus = -1;
//       /*create a DIV element that will contain the items (values):*/
//       a = document.createElement("DIV");
//       a.setAttribute("id", this.id + "autocomplete-list");
//       a.setAttribute("class", "autocomplete-items");
//       /*append the DIV element as a child of the autocomplete container:*/
//       this.parentNode.appendChild(a);
//       /*for each item in the array...*/
//       for (i = 0; i < arr.length; i++) {
//         /*check if the item starts with the same letters as the text field value:*/
//         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//           /*create a DIV element for each matching element:*/
//           b = document.createElement("DIV");
//           /*make the matching letters bold:*/
//           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//           b.innerHTML += arr[i].substr(val.length);
//           /*insert a input field that will hold the current array item's value:*/
//           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//           /*execute a function when someone clicks on the item value (DIV element):*/
//               b.addEventListener("click", function(e) {
//               /*insert the value for the autocomplete text field:*/
//               inp.value = this.getElementsByTagName("input")[0].value;
//               /*close the list of autocompleted values,
//               (or any other open lists of autocompleted values:*/
//               closeAllLists();
//           });
//           a.appendChild(b);
//         }
//       }
//   });
//   /*execute a function presses a key on the keyboard:*/
//   inp.addEventListener("keydown", function(e) {
//       var x = document.getElementById(this.id + "autocomplete-list");
//       if (x) x = x.getElementsByTagName("div");
//       if (e.keyCode == 40) {
//         /*If the arrow DOWN key is pressed,
//         increase the currentFocus variable:*/
//         currentFocus++;
//         /*and and make the current item more visible:*/
//         addActive(x);
//       } else if (e.keyCode == 38) { //up
//         /*If the arrow UP key is pressed,
//         decrease the currentFocus variable:*/
//         currentFocus--;
//         /*and and make the current item more visible:*/
//         addActive(x);
//       } else if (e.keyCode == 13) {
//         /*If the ENTER key is pressed, prevent the form from being submitted,*/
//         e.preventDefault();
//         if (currentFocus > -1) {
//           /*and simulate a click on the "active" item:*/
//           if (x) x[currentFocus].click();
//         }
//       }
//   });
//   function addActive(x) {
//     /*a function to classify an item as "active":*/
//     if (!x) return false;
//     /*start by removing the "active" class on all items:*/
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     /*add class "autocomplete-active":*/
//     x[currentFocus].classList.add("autocomplete-active");
//   }
//   function removeActive(x) {
//     /*a function to remove the "active" class from all autocomplete items:*/
//     for (var i = 0; i < x.length; i++) {
//       x[i].classList.remove("autocomplete-active");
//     }
//   }
//   function closeAllLists(elmnt) {
//     /*close all autocomplete lists in the document,
//     except the one passed as an argument:*/
//     var x = document.getElementsByClassName("autocomplete-items");
//     for (var i = 0; i < x.length; i++) {
//       if (elmnt != x[i] && elmnt != inp) {
//       x[i].parentNode.removeChild(x[i]);
//     }
//   }
// }
// /*execute a function when someone clicks in the document:*/
// document.addEventListener("click", function (e) {
//     closeAllLists(e.target);
// });
// }

