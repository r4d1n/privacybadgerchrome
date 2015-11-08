
require.scopes.disabledSites = (function() {
  var disabledSites = {}

  var exports = {

    getDisabledSites: function() {
      return disabledSites
    },

    addDisabledSite: function(site) {
      disabledSites[site] = true;
    },

    removeDisabledSite: function(site) {
      disabledSites[site] = false;
      // filter out newly falsey values from object
      disabledSites = Object.keys(disabledSites)
      .filter(function(key) {
        return Boolean(disabledSites[key]);
      })
      .reduce(function(obj, current) {
        obj[current] = true;
        return obj;
      }, {})
    },

    readDisabledSites: function() {
      disabledSites = JSON.parse(localStorage.getItem("disabledSites")) || {};
      return disabledSites;
    },

    writeDisabledSites: function() {
      // write to localStorage and return in-memory object
      localStorage.setItem("disabledSites", JSON.stringify(disabledSites))
      return disabledSites;
    }
  }

  return exports;
})()
