'use strict';

(function () {
  var router = require('router');
  var controller = require('/module/controller');

  router.get('/myroute', controller.get.bind(controller));
  router.post('/myroute', controller.post.bind(controller));
  router.put('/myroute', controller.put.bind(controller));
  router.delete('/myroute', controller.delete.bind(controller));
}());
