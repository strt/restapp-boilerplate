(function () {
  const router = require('router');
  const Controller = require('/module/Controller');

  router.get('/', Controller.list);
  router.get('/:id', Controller.get);
  router.post('/', Controller.create);
  router.put('/:id', Controller.update);
  router.delete('/:id', Controller.delete);
}());
