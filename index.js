const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment');
app.get('/',(req,res)=>{
    res.send("Order id is 12345 which will be shipped on 31st july")
    
});
app.post('/',express.json(),(req,res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });
    function order(agent){
        agent.add("Your order 12345 will be shipped on 31st july");
    }
    var intentMap = new Map();
    intentMap.set('WebhookDemo',order)
    agent.handleRequest(intentMap);

})
app.listen(3333, ()=>console.log("Server is live at port 3333"));