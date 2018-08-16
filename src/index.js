import app from './core/app'
import { Connect } from './database'
require('dotenv').config()

const startApp = async () => {
  try {
    await Connect()
    app.set('port', process.env.PORT || 7777)
    app.listen(app.get('port'), () => console.log(`Server Running ${process.env.PORT}`))
  } catch (error) {
    console.error(`Error occured ${error}`)
  }
}

startApp()
