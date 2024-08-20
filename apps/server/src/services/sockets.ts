import { Server } from "socket.io";
import Redis from "ioredis";

// const pub = new Redis({
//     host: "",
//     port: 0,
//     username: "default",
//     password: "",
//   });

//   const sub = new Redis({
//     host: "",
//     port: 0,
//     username: "",
//     password: "",
//   });

class SocketServices {
  private _io: Server;

  constructor() {
    console.log("Init Socket Server...");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }

  public initListeners() {
    console.log("Init Socket Listeners...");
    const io = this.io;

    io.on("connect", (socket) => {
      console.log("new socket connected", socket.id);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("new message received", message);
        // publish this message to redis
        // await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketServices;
