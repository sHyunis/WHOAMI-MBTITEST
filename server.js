const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // PORT 환경 변수 사용

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
