$(function() {
    $('.UserUbtn').on('click', function() {
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        $.ajax({
            url: "http://localhost:3008/logins/:user",
            type: "PUT",
            datatype: "json",
            data: { firstname, lastname, email}
        });
    });
    $("#form, .form-inline").submit(function(e) {
        e.preventDefault();
    });
});