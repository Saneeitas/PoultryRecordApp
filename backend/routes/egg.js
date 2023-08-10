const router = require('express').Router();
const Egg = require("../models/Egg");


router.post('/add-Egg', (req, res) => {

  if (!req.body.qty_produced || !req.body.qty_sold || !req.body.qty_spoiled ) {
    return res.status(400).send({ message: "Inputs cannot be empty" });
  }

  const addEgg = new Egg({
    qty_produced: req.body.qty_produced,
    qty_sold: req.body.qty_sold,
    qty_spoiled: req.body.qty_spoiled,
  });

  addEgg.save((err, Egg) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).send({ sucess: "Added Sucessfully" });
    }
  })
  

})

router.get('/get-eggs', (req,res)=>{
  Egg.find({}, (err, eggs) => {
    if (!err) {
      res.send(eggs);
    }
  });
})

router.get('/get-eggs/:id', (req, res) => {
  const id = req.params.id;
  
  Egg.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `Record not found` });
      } else {
        res.send(data)
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error"})
  })
    
  })


router.put('/update-eggs/:id', (req, res) => {
  const id = req.params.id;

  Egg.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `Cannot update record!.. Record not found` });
      } else {
        res.status(200).send({message: "Updated successfully"})
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error updating record"})
  })
  
})

router.delete('/delete-eggs/:id', (req, res) => {
  const id = req.params.id;

  Egg.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send(
          { message: `Cannot delete record!.. Record not found` });
      } else {
        res.status(200).send({message: "Deleted successfully"})
    }
    })
    .catch(err => {
    res.status(500).send({message: "Error deleting record"})
    })
  
})


module.exports = router;