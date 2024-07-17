import express  from "express";
import { singup } from "../Controller/auth.controler.js";

const route = express.Router();

route.post('/singup', singup);

export default route;