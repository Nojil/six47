
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Six47 API',
  });
});
// Import contact controller
let loginController = require('./loginController');

// Login Routes
router.route('/login/:username')
  .get(loginController.index);

// Export API routes
module.exports = router;
