var getID = require("../");
var expect = require("chai").expect;

describe("jetpack-id", function () {
  describe("valid", function () {
    it("Returns GUID when `id` GUID", function () {
      var guid = "{8490ae4f-93bc-13af-80b3-39adf9e7b243}";
      expect(getID({ id: guid })).to.be.equal(guid);
    });
    it("Returns domain id when `id` domain id", function () {
      var id = "my-addon@jetpack";
      expect(getID({ id: id })).to.be.equal(id);
    });
    it("allows underscores in name", function () {
      var name = "my_addon";
      expect(getID({ name: name })).to.be.equal("@" + name);
    });
    it("allows underscores in id", function () {
      var id = "my_addon@jetpack";
      expect(getID({ id: id })).to.be.equal(id);
    });
    it("Returns valid name when `name` exists", function () {
      var id = "my-addon";
      expect(getID({ name: id })).to.be.equal("@" + id);
    });
  });

  describe("invalid", function () {
    it("Returns null when `id` and `name` do not exist", function () {
      expect(getID({})).to.be.equal(null);
    });
    it("Returns null when no object passed in", function () {
      expect(getID()).to.be.equal(null);
    });
    it("Returns null when `id` exists but not GUID/domain", function () {
      var id = "my-addon";
      expect(getID({ id: id })).to.be.equal(null);
    });
  });
});
