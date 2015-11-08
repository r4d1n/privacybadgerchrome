(function() {
  module("Privacy Badger disabledSites list");

  var disabledSites = require('disabledSites');

  test("read disabled sites from local storage", function(){
    console.log("running disabled sites test")
  })

  // test("isPrivacyBadgerEnabled", function(){
  //   ok(Utils.isPrivacyBadgerEnabled("eff.org"), "enabled for site");
  //
  //   Utils.disablePrivacyBadgerForOrigin("example.com");
  //   ok(!Utils.isPrivacyBadgerEnabled("example.com"), "disabled for site");
  //   Utils.enablePrivacyBadgerForOrigin("example.com");
  //   ok(Utils.isPrivacyBadgerEnabled("example.com"), "enabled for site");
  // });
  //
  // test("disable/enable privacy badger for origin", function(){
  //   var parsed = function(){return JSON.parse(localStorage.disabledSites)};
  //   var origLength = parsed() && parsed().length || 0
  //
  //   Utils.disablePrivacyBadgerForOrigin('foo.com');
  //   ok(parsed().length == (origLength + 1), "one more disabled site");
  //
  //   Utils.enablePrivacyBadgerForOrigin('foo.com');
  //   ok(parsed().length == origLength, "one less disabled site");
  // });


})();
