const cowsay = require("cowsay");
const express = require("express");
const app = express();
const PORT = 3002;

app.post("/sendCowUserName", (req, res) => {
    res.send(cowsay.say({
        text: "Adding cow user", 
        e: "oO",
        T: "U",
    }))
}); 

app.post("/sendCowAppointment", (req, res) => {
    res.send(cowsay.say({
        text: "Setting up cow appointment",
        e: "oO",
        T: "U",
    }))
});
            
app.get("/getCowAppointment", (req, res) => {
        res.send(cowsay.say({
            text: "Adding Cow User",
            e: "oO",
            T: "U",
    }))
});

app.get("/getCowAppointment", (req, res) => {
    res.send(cowsay.say({
        text: "Setting up cow appointment",
        e: "oO",
        T: "U",

    }))
});

app.delete("/deleteCowUser", (req, res) => {
    res.send(console.log("Cow User Deleted"))
})


app.listen(PORT, console.log(`I'm on port ${PORT}`));