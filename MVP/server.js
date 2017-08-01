// import getAllPokes from './client/models/pokemon.js'
const browserify = require('browserify-middleware')
const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bodyParser = require('body-parser')
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/POKEDEX')
const pokemon = mongoose.model('pokemon', new Schema({ name: String, type: String, url: String, likes: Array }))


app.get('/api/pokemon', (req, res) => {
  pokemon.find().then(pokeArray => {
    res.send(pokeArray)
  })
})

var ObjectId = require('mongoose').Types.ObjectId;

app.post('/api/pokemon', (req, res) => {
  pokemon.find({name: 'Squirtle'}).then(console.log)
  var query = {name: req.body.name};
  console.log('our query ', query)

  pokemon.update(query, {$push: {likes: 1}})
  .then((poke) => {
    console.log('our pokemon', poke)
  })
  .then(console.log)
  .catch((err) => {
    console.log(err)
  })
})

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.use(express.static(path.join(__dirname, './client')));

app.use(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


module.exports = pokemon
