import http from "http";
import SocketServices from "./services/sockets";

async function init() {
  const socketService = new SocketServices();

  const httpServer = http.createServer();
  const PORT = process.env.PORT ? process.env.PORT :8000;

  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () =>
    console.log(`HTTP server started on PORT:${PORT}`)
  );

  socketService.initListeners();
}

init();
