import * as express from "express";
import routesv1 from "./api/routes/v1/index"


const PORT: number = 8000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routesv1);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
