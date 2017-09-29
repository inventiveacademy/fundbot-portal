// still in progress!! :/
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
        }
        else{
            alert("Ok then");
        }
    });
});