const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM feedback');
    const data = await result.rows;
    res.send(data);
  } catch (e) {
    console.error(e);
    res
      .sendStatus(400)
      .send({ message: 'Something went wrong on our servers' });
  }
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
    res.sendStatus(400).send({ message: 'Problem creating feedback' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM feedback WHERE id=$1', [id]);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(400).send({ message: 'Problem deleting feedback' });
  }
});

module.exports = router;
