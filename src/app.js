const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const nodemailer = require('nodemailer');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/send', function(req,res){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: 'juanrro10@gmail.com',
      pass: '19198663151'    
    }    
  })
  const mailOptions = {
    from: `${req.body.email}`,
    to: 'juanrro10@gmail.com',
    subject: `${req.body.nombre}`,
    text: `Nombre: ${req.body.nombre}.Teléfono: ${req.body.telefono}.Mensaje: ${req.body.mensaje}`,
    replyTo: `${req.body.email}`
  }
  transporter.sendMail(mailOptions, function(err, resp) {
    if (err) {
      console.error('A  ocurrido un error: ', err);
    } else {
        res.send(req.body)
    }
  })
  

})

app.listen(process.env.PORT, '0.0.0.0')


     