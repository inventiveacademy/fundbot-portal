$(function() {
    $('.UserUbtn').on('click', function() {
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        var pwd = $('.password').val();
        var application = {firstname,lastname,email,pwd}
        var user = $('.username').val();
        var UrlP = "http://localhost:3008/logins/"
        var URL = UrlP + user;
        $.ajax({
                url: URL, 
                type: "PUT",
                data:application,
                datatype:"json",
                ContentType: "application/json",
                error: function(data) {
                    console.log("keep working");
                    alert("nope");
                    console.dir(data);
                },
                success: function(data) {
                    alert("You updated " + user + " successfully")
                    console.log("done");
                    console.dir(data);
                }
        });
    });
    $("#form, .form-inline").submit(function(e) {
        e.preventDefault();
    });
});
