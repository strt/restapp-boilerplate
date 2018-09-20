define(function (require) {
  class Controller {
    // Allows you to access configuration data.
    appData = require('appData');

    list = (req, res) => {
      // Handle listing all the resources.
      res.json({ message: 'Hello from LIST' });
    };

    get = (req, res) => {
      // Handle listing a specific resource.
      res.json({ message: 'Hello from GET' });
    };

    create = (req, res) => {
      // Handle creating a new resource.
      res.json({ message: 'Hello from CREATE' });
    };

    update = (req, res) => {
      // Handle updating an existing resource.
      res.json({ message: 'Hello from UPDATE' });
    };

    delete = (req, res) => {
      // Handle deleting an existing resource.
      res.json({ message: 'Hello from DELETE' });
    };
  }

  return new Controller();
});
