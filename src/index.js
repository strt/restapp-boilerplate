(function () {
  'use strict';

  var router = require('router');
  var controller = require('/module/controller');

  router.get('/myroute', controller.get);
  router.post('/myroute', controller.post);
  router.put('/myroute', controller.put);
  router.delete('/myroute', controller.delete);
}());
