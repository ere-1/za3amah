const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 3000;




// middle ware 

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

console.log("URL:", process.env.SUPABASE_URL);
console.log("KEY:", process.env.SUPABASE_ANON_KEY);

app.use('/api/views', require("./src/routes/page.js"));
app.use("/za3amah", (req,res)=> {
    res.render("landpage")
})
app.use('/',(req,res)=>{ res.redirect('/za3amah')})

app.listen(port, () => {
    console.log("it is started localhost:3000")
})
