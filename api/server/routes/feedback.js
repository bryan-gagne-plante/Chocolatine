const express = require('express');
const router = express.Router();

const { saveFeedBack, getAllFeedBacks, getFeedBackByPreset, getFeedBackByPresetAndPositivity } = require('../controllers/FeedBackController');

const { requireJwtAuth } = require('../middleware/');
const FeedBackController = require('../controllers/FeedBackController');

router.use(requireJwtAuth);

router.post('/', requireJwtAuth, FeedBackController.createFeedBack);

router.get('/all', requireJwtAuth, FeedBackController.getAllFeedBacks);

router.get('/:preset', requireJwtAuth, FeedBackController.getFeedBackByPreset);

router.get('/:preset/:feedback', requireJwtAuth, FeedBackController.getFeedBackByPresetAndPositivity);

module.exports = router;