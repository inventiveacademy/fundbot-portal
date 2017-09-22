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
<<<<<<< HEAD
=======
}
    var email = $("#email").val();
    var data = {
        from: 'Shalay<smashford12@gmail.com>',
        to:email,
        subject: 'Hello! Is this working?',
        text: 'You is Beautiful, You is Smart, You is Important'
     };
>>>>>>> users

    function myFunction2() {
        document.getElementById("myDropdown").classList.toggle("show");
        documetn.getElementById("imgDropDown").onclick(alert("Hello!"));
        console.log("test");
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {

<<<<<<< HEAD
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    }
    $(function() {
            $('.approvebutton').on('click', function() {
                $.ajax({
                    url: "http://localhost:3008/approveApplicationById/",
                    success: function(result) {
                        $("").html(result);
                    }
                });
            });
    })
}
=======

$(function() {
    $("#reset_password").on("click", function(e) {
        e.preventDefault();
        console.log("hello");
        var email = $("#email").val();
        $.ajax({
            url: "http://localhost:3008/sendemail",
            type: "POST",
            data: email
        });
        console.log("Hello, Are you there?");

        if ($success) {
            window.location.replace("/password_sent.pug");
         }
         else{
            alert("Your password does not exist!");
        }
    });
});

$(function(){
    $('.approveButton').on('click', function(e){
        console.log("Approve button clicked!!!");
        e.preventDefault();
        $.ajax({
            url: "http://localhost:3008/applicant_details", 
            type: "POST",
            data:"approved",
            success: function(result){
                console.log("Success!!");
            }
        });
    });
});
>>>>>>> users
