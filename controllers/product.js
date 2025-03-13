const prisma = require("../config/prisma");

exports.create = async(req,res)=>{
    try{

        res.send("Hello Create product")
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
exports.list = async(req,res)=>{
    try{

        res.send("Hello list product")
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
exports.remove = async(req,res)=>{
    try{

        res.send("Hello remove product")
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
exports.listby = async(req,res)=>{
    try{

        res.send("Hello listby product")
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
exports.searchFilter = async(req,res)=>{
    try{

        res.send("Hello searchFilter product")
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
