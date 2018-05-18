define(function (require) {
  class Controller {
    get(req, res) {
      res.json({ message: 'Hello from GET' });
    }

    post(req, res) {
      res.json({ message: 'Hello from POST' });
    }

    put(req, res) {
      res.json({ message: 'Hello from PUT' });
    }

    delete(req, res) {
      res.json({ message: 'Hello from DELETE' });
    }
  }

  return new Controller();
});
