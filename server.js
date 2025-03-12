//Step 1 import
const express = require('express')
const app = express();
const morgan = require('morgan')
//readirSync อ่าน directory ให้อ่านใน folder route
const { readdirSync } = require('fs')
//cor เป็นการอนุญาตให้ server กับ client ติดต่อกันได้
const cors = require('cors')


//import routers ****อีกทางเลือก
// const authRouter = require('./routes/auth')
// const categoryRouter = require('./routes/category')

//middleware
app.use(morgan("dev"));
//ใช้เพื่อให้ req อ่าน json
app.use(express.json());
app.use(cors())
//middleware Router ***อีกทางเลือก
// app.use('/api',authRouter)
// app.use('/api',categoryRouter)

//readdirSyn เรียกใช้ ตาม Folder ในทีนี้เราเลือก Routers เพื่ออ่านออกมาเป็น arry
//.map คือการ loop เข้าไปใน arry เพื่ออ่านไฟล์ +c เพราะจะ loop เข้าไฟล์อีกรอบไปเรื่อยๆ
readdirSync('./routes')
.map((c) => app.use('/api', require('./routes/'+c)));




//Step 3 Router
// app.post('/api', (req, res) => {
//     //code
//     //restructuring การประกาศตัวแปรให้ตรงกับข้อมูลที่ส่งมาจากหน้าบ้าน
//     const { email,username,password } = req.body
//     //.email คือเข้าถึงข้อมูล email ที่ส่งมาจากหน้าบ้านเพื่อเข้าถึง value
//     console.log(email,username,password)
//     res.send('Server is running....');
// });

//Step 2 start server
app.listen(5002, () => console.log("Server is running o port 5002"));
