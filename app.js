const express = require("express");
const app = express();

const port=3000;

app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`, (err) => {
        if(err) {
            console.get(error);
            res.end(err.message);
        }
    });
});


app.use(express.static(`${__dirname}/public`));
app.get("/privacy", (req, res) => {
    res.sendFile(`${__dirname}/privacy.html`, (err) => {
        if(err) {
            console.get(error);
            res.end(err.message);
        }
    });
});
app.get("/terms", (req, res) => {
    res.sendFile(`${__dirname}/terms.html`, (err) => {
        if(err) {
            console.get(error);
            res.end(err.message);
        }
    });
});


app.listen(process.env.PORT || port, () =>{
    console.log('Server started', port);
  
})