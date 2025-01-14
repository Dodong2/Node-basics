//step 1
const express = require('express') //import galing sa node modules
const bodyParcer = require("body-parser") //import galing sa node modules
const app = express()


//step 2
const port = 3000
app.listen(port, () => {
    console.log('running at', port)
})

/* step 3: middleware */
app.use(express.json())
app.use(bodyParcer.json())
app.use(bodyParcer.urlencoded({extended: true}))


/* step 4: routes */
const viewersRoutes = require('../part1/routes/Viewer')
app.use('/viewers', viewersRoutes)

