const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// DEPENDENCIES
const methodOverride = require('method-override')

// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.render('error404')
  })

app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})