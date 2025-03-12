//get
exports.create = async(req,res)=>{
    try{
        res.send('Hello create controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
//Post
exports.list = async(req,res)=>{
    try{
        res.send('Hello List controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
//delete
exports.remove = async(req,res)=>{
    try{
        //code
        //รับค่า Id param มาใช้
        const { id } = req.params
        console.log(id)
        res.send('Hello Delete controller')
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}