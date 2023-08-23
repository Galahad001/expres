import express from 'express'
import router from '@/routes'
import multer from 'multer'
import dbClient from '@/db'
import pkg from 'body-parser'
import cors from 'cors'
const { json, urlencoded } = pkg
const port = 3002
const app = express()
// Use Node.js body parsing middleware
app.use(json({ limit: '50mb' }))
app.use(urlencoded({
  extended: true
}))

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, "../client/src/assets");
  },
  filename: (req, file, cb) =>{
      cb(null,file.originalname);
  }
});

app.use(multer({storage:storageConfig}).single("file"));

app.use(express.static('public'))
dbClient.connect()
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`)
})

process.on("SIGINT", () => {
  dbClient.close();
  console.log('Соединение с базой закрыто')
  process.exit();
});