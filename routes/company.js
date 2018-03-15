const express = require('express');
const router = express.Router();
const companyModel = require('../models/company');

// 获取所有的公司列表
router.get('/', async (req, res, next) => {
  let {companyName, tags} = req.body;
  try {
    let result = await companyModel.list();
    res.json({
      code: '0',
      msg: '',
      data: {
        list: result
      }
    })
  } catch (error) {
    res.json({
      code: '1',
      msg: error,
      data: null
    })
  }
});

// 公司详情
router.get('/:companyId', async (req, res, next) => {
  let {companyId} = req.params;
  try {
    let result = await companyModel.one({_id: companyId});
    res.json({
      code: '0',
      msg: '',
      data: {
        companyInfo: result.length ? result[0] : null
      }
    })
  } catch (error) {
    res.json({
      code: '1',
      msg: error,
      data: null
    })
  }
});


// 新增公司
router.post('/', async (req, res, next) => {
  let {companyName, tags} = req.body;
  try {
    let result = await companyModel.add({companyName, tags});
    res.json({
      code: '0',
      msg: '',
      data: null
    })
  } catch (error) {
    res.json({
      code: '1',
      msg: error,
      data: null
    })
  }
});

// 删除所有公司
router.get('/clear', async (req, res, next) => {
  try {
    let result = await companyModel.clear();
    res.json({
      code: '0',
      msg: '',
      data: null
    })
  } catch (error) {
    res.json({
      code: '1',
      msg: error,
      data: null
    })
  }
});

module.exports = router;