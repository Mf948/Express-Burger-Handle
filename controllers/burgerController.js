const express = require('express');

const router = express.Router();


const burger = require('../models/burger.js');


router.get('/', (req, res) => {gti
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };

    res.render('index', hbsObject);
  });
});

router.post('/api/burger', (req, res) => {
  burger.create(['name'], [req.body.name], (result) => {

    res.json({ id: result.insertId });
  });
});

router.put('/api/burger/:id', (req, res) => {
 
  burger.update(
    req.params.id,
    (result) => {
      if (result.changedRows === 0) {

        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/api/burger/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {

      return res.status(404).end();
    }
    res.status(200).end();
  });
});


module.exports = router;
