require('dotenv').config()
const express = require('express')
// const helmet = require('helmet')
const PORT = process.env.PORT || 3003
const initializeServerEnv = require(`./${process.env.NODE_ENV}.server`)

const app = express()

// TODO: disable helmet for a while
// app.use(helmet())
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       baseUri: ["'self'"],
//       scriptSrc: ["'self'", "'unsafe-eval'"],
//       objectSrc: ["'self'"],
//       fontSrc: ["'self'", 'https:', 'data:'],
//       frameAncestors: ["'self'"],
//       imgSrc: ["'self'", 'data:'],
//       styleSrc: ["'self'", 'https:', 'unsafe-inline'],
//     },
//   })
// )

initializeServerEnv(app, express)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server run on port ${PORT}`)
})
