$(function() {
    $('.approveButton').on('click', function() {
        if (confirm("Are you Positive you want to Approve") == true) {
            var approveApplicant = $('.approveButton').val();
            var Url = "http://localhost:3008/approveapplication/";
            var URL = Url + approveApplicant;
            $.ajax({
                url: URL,
                type: "PUT",
                datatype: "json",
                data:approveApplicant,
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