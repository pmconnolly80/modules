var solarSystem = (function(ss) {

  var stars = ["Proxima Centauri", "Rigil Kentaurus", "Barnard's Star", "Wolf 359", "Luyten 726-8A"];
  var systemAge = 0;
  var dwarfPlanets = [];
  
    ss.getStars = function() {
      return stars;
    };
    ss.getSystemAge = function() {
      return systemAge;
    };  
    ss.setSystemAge = function(newSystemAge) {
      systemAge = newSystemAge;
    };
    ss.getDwarfPlanets = function() {
      return dwarfPlanets;
    };
    ss.setDwarfPlanets = function(newDwarfPlanets) {
      dwarfPlanets = newDwarfPlanets;
    };

    return ss;

})(solarSystem);

//console.log(solarSystem);
//console.log(solarSystem.setSystemAge(4,600,000,000));