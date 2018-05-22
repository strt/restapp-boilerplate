'use strict';

(function () {
  const router = require('router');
  const controller = require('/module/controller');

  router.get('/', controller.list.bind(controller));
  router.get('/:id', controller.get.bind(controller));
  router.post('/', controller.create.bind(controller));
  router.put('/:id', controller.update.bind(controller));
  router.delete('/:id', controller.delete.bind(controller));
}());
