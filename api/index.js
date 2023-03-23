const server = require("./src/app");
const { conn } = require("./src/db");

conn.sync( {force: false}).then(() => {
  server.listen(process.env.PORT, () =>{
    console.log(`listening at ${process.env.PORT}`)
  })
})