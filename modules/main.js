var solarSystem = (function() {

  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var planetsLandedOn = 0;
  var spacecraft = [];

 return {
    manufacture_date: new Date(),

    getPlanets: function() {
      return planets;
    },
    getPlanetsLandedOn: function() {
      return planetsLandedOn;
    },
    setPlanetsLandedOn: function(newPlanetsLandedOn) {
      planetsLandedOn = newPlanetsLandedOn;
    },
    getSpacecraft: function() {
      return spacecraft;
    },
    setSpacecraft: function(newSpacecraft) {
      spacecraft = newSpacecraft;
    }
  }
})();

