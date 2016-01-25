function Place(city,landmark,timeOfYear,notes) {
  this.city = city;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

$ (document).ready(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var userCity = $("input#new-city").val();
    var userLandmark = $("input#new-landmark").val();
    var userTimeOfYear = $("input#new-time-of-year").val();
    var userNotes = $("input#new-notes").val();
    var newPlace = new Place(userCity,userLandmark,userTimeOfYear,userNotes);

    $("ul#output").append("<li><span class='list'>" + newPlace.city + "</span></li>");

    $(".list").last().click(function() {
      $("#show-place").show();
      $(".city").text(newPlace.city);
      $(".landmark").text(newPlace.landmark);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
  });
});



// function resetFields() {
//   $("input#new-city").val("");
//   $("input#new-landmark").val("");
//   $("input.new-time-of-year").val("");
//   $("input.new-notes").val("");
// }
