const allowedOrigins = require("./allowedOrigins")

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}
// const corsOptions = {
//   origin: (origin, callback) => {
//     return callback(null, true)
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// }

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (origin === "https://ziraa.netlify.app/") {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// }

module.exports = corsOptions
