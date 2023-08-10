const router = require('express').Router();
const Poultry = require("../models/Poultry");


router.post('/add-poultry', (req, res) => {

  if (!req.body.qtyproduced || !req.body.qtysold || !req.body.qtydead || !req.body.breed ) {
    return res.status(400).send({ message: "Inputs cannot be empty" });
  }

  const addPoultry = new Poultry({
    qtyproduced: req.body.qtyproduced,
    qtysold: req.body.qtysold,
    qtydead: req.body.qtydead,
    breed: req.body.breed,
  });

  addPoultry.save((err, poultry) => {
    if (err) {
      res.send(err)
    } else {
      res.status(200).send({ sucess: "Added Sucessfully" });
    }
  })
  

})

router.get('/get-poultries', (req,res)=>{
  Poultry.find({}, (err, poultries) => {
    if (!err) {
      res.send(poultries);
    }
  });
})

router.get('/get-poultries/:id', (req, res) => {
  const id = req.params.id;
  
  Poultry.findById(id)
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


router.put('/update-poultries/:id', (req, res) => {
  const id = req.params.id;

  Poultry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

router.delete('/delete-poultries/:id', (req, res) => {
  const id = req.params.id;

  Poultry.findByIdAndRemove(id)
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