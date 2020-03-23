import {routes} from "./routes";

// create express app
import express from "express";
const app = express();

// Constants
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

//Routes
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`The server has started and listens on PORT ${PORT}`);
});
