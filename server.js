import 'dotenv/config'

const express = require('express')
const cors = require('cors')
const app = express()

import { getRoutes } from './routes/index'

app.use(express.json())
app.use(cors())
app.use('/api/v1', getRoutes())

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// old app.listen, commented out since heroku hated it
// app.listen(5000, () => {
//   console.log('Server Started on port:5000')
// })
