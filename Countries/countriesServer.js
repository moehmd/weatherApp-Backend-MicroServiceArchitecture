import http from "http";
import debug from "debug";
import countryApp from "./countryApp/countryApp.js";
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
    const countryAddr = countryServer.address();
    const countryBind = typeof countryPort === "string" ? "pipe " + countryPort : "port " + countryPort;
    debug("Listening on " + countryBind);
};

const countryPort = normalizePort(process.env.PORT || "5555");
countryApp.set("port", countryPort);
const countryServer = http.createServer(countryApp);
countryServer.on("error", onError);
countryServer.on("listening", onListening);
countryServer.listen(countryPort, () => { console.log("countries service running") });
