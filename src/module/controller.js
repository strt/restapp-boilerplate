define(function (require) {
  'use strict';

  function Controller() {
    // Construct
  }

  Controller.prototype.get = function (req, res) {
    res.json({ message: 'Hello from GET' });
  };

  Controller.prototype.post = function (req, res) {
    res.json({ message: 'Hello from POST' });
  };

  Controller.prototype.put = function (req, res) {
    res.json({ message: 'Hello from PUT' });
  };

  Controller.prototype.delete = function (req, res) {
    res.json({ message: 'Hello from DELETE' });
  };

  return new Controller();
});
