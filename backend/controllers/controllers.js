// import db from "../db/db.js"
import data from '../data/SuitImages.js';


export const suitsPage = (req,res) => {
    res.send(data.Products)    
}

export const suitItem = (req,res) => {
    const product = data.Products.find(product => product.id === req.params.id);
    if(product) {
        res.send(product)
    } else {
        res.status(404).json({err: "couldn't find product"})
    }
}