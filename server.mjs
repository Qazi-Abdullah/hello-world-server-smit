console.log("this is express side")
import express from 'express'

const app = express()
app.get('/', (req, res) => {
   console.log('Hello World!', new date());
  res.send('Hello World!', + new date());
})

app.get('/profile', (req, res) => {
  console.log('this is profile!', new date());
 res.send('this is profile!', + new date());
})


const PORT = process.env.PORT || 3099;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
