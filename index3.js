const express = require("express")
const app = express()

let folks = [
    {name : 'gunapriya',
    money: [{
        income : 50000
    }]
}]

app.use(express.json())

// get request
app.get("/", (req, res) => {
    const n = req.query.n
    res.send({
        folks
    })
})


//post request
 app.post("/", (req, res) => {
    const expense = req.body.expense
    folks[0].money.push({
        expensenses : expense
    })

    res.send({
        msg: "Done posting"
    })
 })


 // put request

app.put("/", (req, res) => {
    const salary = req.body.salary
    console.log(salary)
    folks[0].money[0].income += salary

    res.send({
        msg: "Done adding"
    })
})

// delete request

app.delete("/", (req, res) => {
    folks = []

    res.send({
        msg: "Done deletion"
    })
})

app.listen(3003)