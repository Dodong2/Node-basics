//step 1
const  express = require('express')
const router = express.Router()

//step 2 basic get method
router.get('/get', (response) => {
    response.json({
        "name": "carl",
        "gender": "Male"
    })
})

//step 2 basic post method
router.post('/insert', (response) => {
    response.json({
        "message": "success!"
    })
})

//step 3 ginagamit yung request para makapag-send sayo yung user
//ginagamit yung query para makita yung value na sinend ng user
router.get('/fetch', (request, response) => {
    response.send(request.query)
})

/* step 4: imagine yung postman yung client, tapos ikaw yung tatanggap ng sinend ng client  */
router.post('/insert2', (request) => {
    console.log(request.body)
})

/* pagkuha ng parameters ng headers */
/* same lang din ito kaso naka headers so ibibgay lang niya lahat ng laman ng header, ginagamit to para sa token */
// router.post('/insert2', (request) => {
//     console.log(request.headers)
// })

/* step 5 same */
router.get('/fetch2', (request, response) => {
    const { name, age, gender } = request.query

    if (Number(age) == 21) {
        response.status(200).send({
            name,
            age,
            gender,
            "message": "Age is correct"
        })
    } else {
        response.status(500).send({
            "message": "Age is incorrect",
            "status": "Failed"
        })
    }

    
})


//step 5 always import
module.exports = router

/* note: sa postman kapag paramas ang request mo means puro string so mano mano gagamit ng Number(age),
   kapag body no need na
*/