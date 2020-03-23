import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("<h1>Hello again</h1>")
});


export {
    router as routes
}
