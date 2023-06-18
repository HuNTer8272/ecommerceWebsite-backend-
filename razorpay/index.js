const express = require("express");
const app = express();
const port = 5000;
const razorpay = require("razorpay");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/payment", async (req, res) => {

    let {amount} = req.body;

    var instance = new Razorpay({ 
     key_id: 'YOUR_KEY_ID',
     key_secret: 'YOUR_SECRET', 
    });

    let order = await instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
      
    });

    res.status(201).json({
        sucess : true,
        order,
        amount,
    });

});

app.listen(port, () => {
console.log(`Server is running on port http://localhost:${port}`);
});
