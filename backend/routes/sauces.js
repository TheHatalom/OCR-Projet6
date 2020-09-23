const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAll);
router.post('/', auth, multer, saucesCtrl.create);
router.get('/:id', auth, saucesCtrl.getOne);
router.put('/:id', auth, multer, saucesCtrl.modify);
router.delete('/:id', auth, saucesCtrl.delete);

module.exports = router;