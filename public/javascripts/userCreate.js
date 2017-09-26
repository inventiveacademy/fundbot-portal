$(function() {
    $('.UserCbtn').on('click', function() {
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        var contactphone = $('.contactphone').val();
        var state = $('.State').val();
        var city = $('.city').val();
        var zip = $('.zip').val();
        var address = $('.addressYou').val();
        var password = $('.password').val();
        if (password != "") {
            $.ajax({
                url: "http://localhost:3008/applications",
                type: "POST",
                datatype: "json",
                data: { firstname, lastname,email,contactphone,state,city,zip,address,password},
                error: function(data) {
                    console.log("keep working");
                    alert("nope");
                    console.dir(data);
                },
                success: function(data) {
                    console.log("done");
                    console.dir(data);
                }

            });
        };
    });
    $("#form, .formInput").submit(function(e) {
        e.preventDefault();
    });
});