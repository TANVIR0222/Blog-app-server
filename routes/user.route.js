import express from "express";
import { test } from "../Controller/user.controlle.js";

const route = express.Router();

route.get('/test',test)

export default route;