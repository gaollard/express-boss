const express = require('express');
const router = express.Router();
const JobModel = require('../models/job');

// 获取所有的招聘职位列表
router.get('/', async (req, res, next) => {
  try {
    let result = await JobModel.list();
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
router.get('/:jobId', async (req, res, next) => {
  let {jobId} = req.params;
  try {
    let result = await JobModel.one({jobId});
    res.json({
      code: '0',
      msg: '',
      data: {
        jobInfo: result.length ? result[0] : null
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
router.post('/add', async (req, res, next) => {
  let {
    authorId,
    title,
    address,
    experience,
    education,
    salary,
    details
  } = req.body;
  try {
    let result = await JobModel.add({
      authorId,
      title,
      address,
      experience,
      education,
      salary,
      details
    });
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