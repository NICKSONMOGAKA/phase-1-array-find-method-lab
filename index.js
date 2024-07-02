exports.findMatching = function(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };
  
  exports.fuzzyMatch = function(drivers, letters) {
    return drivers.find(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  };
  
  exports.matchName = function(drivers, name) {
    return drivers.includes(name);
  };
  
  exports.superbowlWin = function(record) {
    const wins = [1997, 1998, 2015];
    
    for (let i = 0; i < wins.length; i++) {
      if (record.includes(wins[i])) {
        return wins[i];
      }
    }
    
    return undefined;
  };
  