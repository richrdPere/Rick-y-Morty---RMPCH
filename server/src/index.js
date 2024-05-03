require("./DB_connection");
const server = require("./server");
const PORT = 3001;
const { conn } = require("./DB_connection");

// try {
//    server.listen(PORT, async () => {
//       console.log(`Server raised in port ${PORT}`);
//       await conn.sync({force: true});
//    });
// } catch(error) {
//    console.log(error);
// }

conn.sync({})
.then(() => {
   server.listen(PORT, async () => {
      console.log(`Server raised in port ${PORT}`);
   });
})
.catch((error) => {
   console.log(error);
})
