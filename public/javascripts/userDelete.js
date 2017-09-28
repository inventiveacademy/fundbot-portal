

// still in progress!! :/


$(function() {
    $('.deleteUser').on('click', function() {
        var deleteUser = $('#deleteUser').val();
        $.ajax({
            url: "http://localhost:3008/logins/:user",
            type: "DELETE",
            datatype: "json",
            data:deleteUser,
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
    });
});