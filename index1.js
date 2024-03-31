const express = require("express")
const app = express()

const folks = [
    {
        name: 'gunapriya',
        money :[
            {salary :2000}
        ]
    },
    {
        name : 'sudharsan',
        money :[{
            salary :3000},
            {expensenses : 1000}]
    },
    {
        name : 'Devendiran',
        money :[{
            salary :5000},
            {expensenses : 4000}]
    }
]
app.use(express.json())

app.get("/", (req, res) =>{
    const n = req.query.n
        res.json({
            folks
        })

    })

app.put("/", (req, res)=>{
    const salary = req.body.salary;
    folks[0].money += salary;
    res.json({
        msg: "Done"
    })
})

 app.post("/", (req, res) =>{
    const expense = req.body.expense
    const income = req.body.income
     folks[0].money.push({
        expensenses : expense
     })
    
    res.json({
        msg:"done"
    })
 })

 app.delete("/", (req, res) => {
    folks[0].money = []

    res.json({
        msg: "done"
    })
 })

app.listen(3002);
