$(document).ready(function() {

  $('#dropdown').click(function(event) {
    let dropdown = $('#dropdown-content');
    if (dropdown.css('display') === 'none') {
      dropdown.css('display', 'initial');
    } else if (dropdown.css('display') != 'none') {
      dropdown.css('display', 'none');
    }
  });

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     console.log("test");
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
})