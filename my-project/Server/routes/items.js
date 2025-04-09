const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET all items
router.get('/', itemController.getItems);

// POST new item
router.post('/', itemController.createItem);

// GET item by ID
router.get('/:id', itemController.getItemById);

// PUT update item
router.put('/:id', itemController.updateItem);

// DELETE item
router.delete('/:id', itemController.deleteItem);

module.exports = router;