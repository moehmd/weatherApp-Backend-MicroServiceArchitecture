import http from "http";
import debug from "debug";
import cityApp from "./cityApp/cityApp.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};
  
const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
        case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
        default:
        throw error;
    };
};
  
const onListening = () => {
    const cityAddr = cityServer.address();
    const cityBind = typeof cityPort === "string" ? "pipe " + cityPort : "port " + cityPort;
    debug("Listening on " + cityBind);
};

const cityPort = normalizePort(process.env.PORT || "4545");
cityApp.set("port", cityPort);
const cityServer = http.createServer(cityApp);
cityServer.on("error", onError);
cityServer.on("listening", onListening);
cityServer.listen(cityPort, () => { console.log("cities service running") });
