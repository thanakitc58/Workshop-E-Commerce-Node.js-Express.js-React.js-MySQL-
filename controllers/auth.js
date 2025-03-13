//import prisma
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//ปกติใช้ const เป็นการใช้ในไฟล์ตัวเองหากต้องการส่งออกให้ exports นำหน้า
exports.register = async (req, res) => {
  try {
    //code
    const { email, password } = req.body;

    //step 1 Validate body
    if (!email) {
      //
      return res.status(400).json({ message: "Email is required!!!" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required!!!" });
    }

    //step 2 ตรวจสอบว่ามีผู้ใช้ที่ลงทะเบียนด้วยอีเมลนี้แล้วหรือไม่
    const user = await prisma.user.findFirst({
      // where: is used in findUnique, findMany, update, and delete
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: "Email already Exit!!" });
    }
    //step 3 HashPassword 10 คือเข้ารหัสเพิ่มเข้าไปเพื่อความปลอดภัย เข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล
    const HashPassword = await bcrypt.hash(password, 10);
    // console.log(HashPassword)

    //step 4 Register user คือชื่อฐานข้อมูลจะทำการ Create
    await prisma.user.create({
      data: {
        email: email,
        password: HashPassword,
      },
    });

    res.send("Register Success");
  } catch (err) {
    //err
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.login = async (req, res) => {
  //code
  try {
    //code
    const { email, password } = req.body;

    // Step 1 ตรวจสอบว่าใน request body มี email และ password ส่งมาไหม
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    //Check  email  ค้นหาผู้ใช้จากอีเมลที่ส่งมา
    if (!user) {
      return res.status(400).json({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }

    //Step 2 Check password ตรวจสอบรหัสผ่านที่ผู้ใช้กรอกกับรหัสผ่านที่เก็บไว้ในฐานข้อมูล
    const isPasswordMath = await bcrypt.compare(password, user.password);
    //check ต่อ
    if (!isPasswordMath) {
      return res.status(400).json({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }
    //step 3 Create Payload
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    //step 4 Generate Token
    jwt.sign(payload, process.env.SECRET, { expiresIn: "1D" }, (err, token) => {
      if (err) {
        return res.status(500).json({ message: "Server Error" });
      }
      res.json({ payload, token });
    });
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//current-user เอาไว้เช็คหน้าบ้านว่า user login รึยัง
exports.currentUser = async (req, res) => {
  try {
    //code
    res.send("Hello current-user");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.currentAdmin = async (req, res) => {
  try {
    //code
    res.send("Hello current-Admin");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
