const prisma = require("../config/prisma");

//get
exports.create = async(req,res)=>{
    try{
        const { name } = req.body;
        //.category คือเข้าตารางนั้นๆ . create คือสิ่งที่เราจะทำ
        const category = await prisma.category.create({
            //data: is used in create, update, and upsert
            data:{
               name :name,   
            }
        })
    
        res.send(category )
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}
//Post
exports.list = async(req,res)=>{
    try{
        //code
        const category = await prisma.category.findMany()
        res.send(category)
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
        //ลบไอดีที่สร้างโดยใช้ .delete ให้เปลี่ยนจาก string เป็น number
        const { id } = req.params
        const category = await prisma.category.delete({
            where:{
                id: Number(id)
            }
        })
        res.send(category)
    }catch(err){
        console.log(err)
        res.status(500).json({ message:"Server Error"})
    }
}