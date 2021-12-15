const express = require("express")
const app = express()
const port = 4000

// eslint-disable-next-line node/no-path-concat
app.use(express.static(__dirname + "/public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
