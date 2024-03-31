
const express = require("express")
const app = express()

const user = [{
    name : "ram",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json())

app.get("/", function(req, res){
    const ramKidneys = user[0].kidneys;
    const numberOfKidneys = ramKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < ramKidneys.length; i++){
        if(ramKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys
            + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

 app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
 })
 app.put("/", function(req, res){
    
    if(isThereUnHealthyKidneys()){
        for(let i = 0; i < user[0].kidneys.length; i++){
            user[0].kidneys[i].healthy = true;
        }
        res.json({
            msg:"Done"
        });
    }
    else{
        res.status(411).json({
            msg:"you don't have bad kidneys"
        })
    }
    
 })
 app.delete("/", function(req, res){

    if(isThereUnHealthyKidneys()){  
    const newKidneys = [];
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
        user[0].kidneys = newKidneys;
        res.json({
            msg:"Done3"
        })

    } else {
        res.status(411).json({
            msg: "You don't have unhealthy kidneys"
        })
    }

 })

 function isThereUnHealthyKidneys(){
    let isUnHealthyKidneys = false
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            isUnHealthyKidneys = true
        }
    }
    return isUnHealthyKidneys;
 }


app.listen(3000)