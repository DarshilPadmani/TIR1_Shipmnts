// import express from express;
const express = require('express')
const route = express.Router();
const storePricing = require('../models/storePricing');

route.post('/storePricing', async(req, res)=>{
  const {storeLocation, currency, taxPercentage, premium_items} = req.body;

  try{
    const newStore = new storeLocation({
      storeLocation,
      currency,
      taxPercentage,
      premium_items
    });

    await newStore.save();

    res.json({store: newStore, message: "Store Created Successfully"});

  }

  catch(error){
    res.status(500).json({error: error.message});
  }
});

route.get('/StorePricing', async(req, res)=>{
  try{
    const storePricing = await storePricing.find();
    res.json(storePricing);
  }
  catch(err){
    res.status(500).json({
      error: err.message
    });
  }
});

route.get('/storePricing/storeLocation', async (req, res)=>{
  try{
    const storePricing = await storePricing.findOne({ storeLocation: req.params.location});
    if(!storeLocation) return res.status(404).json({
      error: "Location Not Found"
    });
  }
  catch{
    res.status(404).json({
      error: err.message
  });
  }
});

route.put('/storepricing/Location', async(req, res)=>{
  try{
    const updateStore = await storePricing.findOneAndUpdate(
    {
      storeLocation: req.params.location
    },
    {
      set: req.body
    },
    {
      new: true
    });

    if(!updateStore) return res.status(404).json({
      error: "Store Not Found"
    });
  }
  catch(err){
    res.status(500).json({error: err.message});
  }

});


module.exports = routes;
