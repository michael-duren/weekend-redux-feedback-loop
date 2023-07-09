const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  res.send('YOU GOT ME');
});

// POST FEEDBACK
router.post('/', async (req, res) => {
  try {
    const { feeling, understanding, support, comments } = req.body;
    await pool.query(
      'INSERT INTO feedback' +
        '(feeling, understanding, support, comments) ' +
        'VALUES ' +
        '($1, $2, $3, $4);',
      [feeling, understanding, support, comments]
    );
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

module.exports = router;
