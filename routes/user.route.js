import express from "express";

const route = express.Router();

route.get('/', (req,res)=> {
    res.json({message : 'Api work'})
})

export default route;