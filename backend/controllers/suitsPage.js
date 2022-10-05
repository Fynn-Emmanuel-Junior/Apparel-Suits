// import db from "../db/db.js"
import Products from '../data/SuitImages.js';


export const suitsPage = (req,res) => {
    res.send(Products)    
}