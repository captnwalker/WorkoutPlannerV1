$(document).ready(function () {

  $(".completed-form").on("submit", function (event) {
    event.preventDefault();

    var exercise_id = $(this).children(".exercise_id").val();
    console.log(exercise_id)

    $.ajax({
      method: "PUT",
      url: "/exercises/" + exercise_id

    }).then(function (data) {
      location.reload();
      
    })
  })
});
