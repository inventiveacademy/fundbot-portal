$(document).ready(function() {
	$('#dropdown').click(function(event) {
	    let dropdown = $('#dropdown-content');
	    if (dropdown.css('display') === 'none') {
	      dropdown.css('display', 'initial');
	    } else if (dropdown.css('display') != 'none') {
	      dropdown.css('display', 'none');
	    }
	  });
});