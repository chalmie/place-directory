function Place(city,landmark,timeOfYear) {
  this.city = city;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = [];
}

$ document.ready(function (){
  $("form#new-place").submit(function(event){
    var userCity = $("input#new-city").val();
    var userLandmark = $("input#new-landmark").val();
    var userTimeOfYear = $("input#new-time-of-year").val();
    var userNotes = $("input#new-notes").val();
  });

}};
