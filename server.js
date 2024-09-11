const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // db.json 파일은 프로젝트 루트에 위치해야 합니다
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
