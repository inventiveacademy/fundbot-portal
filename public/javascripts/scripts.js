function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
    var email = $("#email").val();
    var data = {
        from: 'Shalay<smashford12@gmail.com>',
        to:email,
        subject: 'Hello! Is this working?',
        text: 'You is Kind, You is Smart, You is Important'
     };

$(function(){
    $('.approveButton').on('click', function(e){
        console.log("Approve button clicked!!!");
        e.preventDefault();
        var id = ${application.id};
        $.ajax({
            url: "http://localhost:3008/applicant_details/" + id, 
            type: "POST",
            data:"Yay",
            success: function(result){
                console.log("Success!!");
            }
        });
    });
});