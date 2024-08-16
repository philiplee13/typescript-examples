import * as express from "express";
import routesv1 from "./api/routes/v1/index";
import { config } from "dotenv";

config();

const PORT: number = parseInt(process.env.SERVER_PORT || ""); // funky, find something else in actual apps
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routesv1);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
