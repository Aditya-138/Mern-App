const express = require('express')
const router = express.Router()
const { getGoals,setGoals,deleteGoals,putGoals } = require('../controllers/goalController')


// router.get('/',getGoals)

// router.post('/',setGoals)

// router.put('/:id',putGoals)

// router.delete('/:id',deleteGoals)

//  OR RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(putGoals).delete(deleteGoals);
module.exports = router