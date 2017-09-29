$(function() {
    $('.UserCbtn').on('click', function() {
        var user = $('.username').val();
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        var pwd = $('.password').val();
        var isuser = true;
        var application = { user,firstname, lastname,email,pwd,isuser}
        if (pwd != "") {
            $.ajax({
                url: "http://localhost:3008/logins",
                type: "POST",
                data:application,
                datatype:"json",
                ContentType: "application/json",
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