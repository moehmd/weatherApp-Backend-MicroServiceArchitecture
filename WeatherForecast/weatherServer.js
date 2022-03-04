import http from "http";
import debug from "debug";
import dotenv from "dotenv";
import weatherApp from "./weatherApp/weatherApp.js";

dotenv.config();

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
    const weatherAddr = weatherServer.address();
    const weatherBind = typeof weatherPort === "string" ? "pipe " + weatherPort : "port " + weatherPort;
    debug("Listening on " + weatherBind);
};

const weatherPort = normalizePort(process.env.PORT || "7777");
weatherApp.set("port", weatherPort);
const weatherServer = http.createServer(weatherApp);
weatherServer.on("error", onError);
weatherServer.on("listening", onListening);
weatherServer.listen(weatherPort, () => { console.log("weather service running") });
