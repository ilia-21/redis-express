const config = require("../config.json");
const i21 = require("ilia21-js");
const fs = require("fs");
const path = require("path");
const redis = require("redis");
const express = require("express");
const client = redis.createClient();
(async () => {
    await client.connect();
})();
const app = express();

app.use(express.json());

let routesPath = path.join(__dirname, "../routes");
let routeFiles = fs.readdirSync(routesPath).filter((file) => file.endsWith(".js"));
i21.log("Importing routes")
for (const file of routeFiles) {
    i21.log("Importig route " + file)
    const filePath = path.join(routesPath, file);
    const oneRoute = require(filePath);
    switch (oneRoute.type) {
        case "get":
            app.get(oneRoute.path, oneRoute.app);
            break;
        case "post":
            app.post(oneRoute.path, oneRoute.app);
            break;
        case "put":
            app.put(oneRoute.path, oneRoute.app);
            break;
        case "delete":
            app.delete(oneRoute.path, oneRoute.app);
            break;
        default:
            i21.error(`Route ${file} has invalig type ${oneRoute.type}`)
            break
    }
}
i21.success(`Starting server on port ${config.port}`)
app.listen(config.port)

module.exports = {
    client,
};