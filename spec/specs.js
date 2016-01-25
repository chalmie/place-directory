describe('Place', function (){
  it("creates a new place with the given specifications", function() {
    var testPlace = new Place ("Amsterdam", "Vondelpark", "Summer", "Notes");
    expect(testPlace.city).to.equal("Amsterdam");
    expect(testPlace.landmark).to.equal("Vondelpark");
    expect(testPlace.timeOfYear).to.equal("Summer");
    expect(testPlace.notes).to.equal("Notes");
  });
});
