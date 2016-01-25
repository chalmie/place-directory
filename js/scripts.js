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

  $("ul#output").append("<li><span class='city'>" + newPlace.city + "</span></li>")
  });

  $("#show-place").last().click(function() {
    $("#show-place").show();
    $(".city").text(newPlace.city);
    $(".landmark").text(newPlace.landmark);
    $(".timeOfYear").text(newPlace.timeOfYear);
    $(".notes").text(newPlace.notes);
  });




});
