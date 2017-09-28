// $(function(){
//     $('.approveButton').on('click', function(e){
//         console.log("Approve button clicked!!!");
//         console.log(`http://localhost:3008/approveapplication/:id`)
//         e.preventDefault();
//         $.ajax({
//             url: `http://localhost:3008/approveapplication/$(application._id)`, 
//             type: "PUT",            
//             error: function(result){
//                 console.log("Nooo💀️!!");
//             },
//             success: function(result){
//                 console.log("Success!!");
//             }
//         });
//     });
// });