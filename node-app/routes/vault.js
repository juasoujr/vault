const { strict } = require('assert')
const express = require('express')
const router = express.Router()

const fs = require('fs')
const { read } = require('../controller/vault')

const vault = require('../controller/vault')

router.get('/test/:test', async function (req, res, next) {
  try {
    let result = req.params.test
    return res.send(result)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error displaying test')
  }
})

router.get('/health', async function (req, res, next) {
  try {
    let result = await vault.health()
    return res.send(result)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error retrieving health')
  }
})

router.get('/status', async function (req, res, next) {
  try {
    let result = await vault.status()
    return res.send(result)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error retrieving status')
  }
})

router.get('/list/:path', async function (req, res, next) {
  try {
    let result = await vault.list(req.params.path)
    return res.send(result)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error retrieving list from path')
  }
})

router.get('/read/:path', async function (req, res, next) {
  try {
    let path = '/secret/' + req.params.path // +'/' + req.params.secret_id
    let result = await vault.read(path)
    return res.send(result.data)
    //return res.send(result.data.req.params.secret_id)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error retrieving the path ' + req.params.path)
  }
})


router.post('/write/:path/:secret_id/:secret', async function (req, res, next) {
  try {
    let path = 'secret/' + req.params.path 
    let result = await vault.write(path, req.params.secret_id, req.params.secret)
    return res.send(result)
  } catch (err) {
    console.error(err)
    return res.status(400).send('Error to write the secret')
  }
})


module.exports = router