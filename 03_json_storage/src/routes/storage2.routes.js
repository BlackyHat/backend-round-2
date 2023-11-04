const router = require('express').Router({ mergeParams: true });

router.get(':options', (req, res, next) => {
  const params1 = req.params[0];
  console.log('🚀 ~ router.get ~ params1:', params1);

  const params2 = req.originalUrl;
  console.log('🚀 ~ router.get ~ params2:', params2);

  next();
});
// router.put('*', saveDataController);

module.exports = { storageRouter2: router };
