const express = require("express")
const routes = require("./routes")
const aplicacion = express()
const port = 3500

aplicacion.use(express.json())

routes(aplicacion)

aplicacion.listen(port, () => {
  console.log("Puerto activo: " + port)
})

aplicacion.get("/", (req, res) => {
  res.send("Ventana principal del API")
})
