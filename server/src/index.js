
const server = require("./server");
const PORT = 3001;

server.listen(PORT, () => {
   console.log(`Server raised in port ${PORT}`);
});

