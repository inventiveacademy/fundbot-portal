// ----------- Search user ----------- \\




$(document).ready(function() { 
    $('.searchusers').keyup(function() {
        var valThis = $(this).val();
        $('.adminlist>p').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
        $('.userlist>p').each(function() {
            var text = $(this).text().toLowerCase();
            (text.indexOf(valThis) == 0) ? $(this).show(): $(this).hide();
        });
    });
    jQuery('.user-tabs .user-tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.user-tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});



// ----------- Create user ----------- \\




$(function() {
    $('.UserCbtn').on('click', function() {
        var user = $('.username').val();
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        var pwd = $('.password').val();
        var isuser = true;
        var application = {user,firstname,lastname,email,pwd,isuser}
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




// ----------- Update user ----------- \\




$(function() {
    $('.UserUbtn').on('click', function() {
        var firstname = $('.firstname').val();
        var lastname = $('.lastname').val();
        var email = $('.email').val();
        var pwd = $('.password').val();
        var application = {firstname,lastname,email,pwd}
        var URL = $('.UserUbtn').val();
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
                    alert("You updated " + firstname + " successfully")
                    console.log("done");
                    console.dir(data);
                }
        });
    });
    $("#form, .form-inline").submit(function(e) {
        e.preventDefault();
    });
});




// ----------- Delete user ----------- \\





$(function() {
    $('.deleteUser').on('click', function() {
            var deleteUser = $('#deleteUser').val();
        if (confirm("Are you Positive you want to delete") == true) {
            var deleteUser = $('#deleteUser').val();
            var Url = "http://localhost:3008/logins/";
            var URL = Url + deleteUser;
            $.ajax({
                url: URL,
                type: "DELETE",
                datatype: "json",
                data: deleteUser,
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
            window.location.href = ("http://localhost:3000/users_list");
        }
        else{
            alert("Ok then");
        }
    });
});