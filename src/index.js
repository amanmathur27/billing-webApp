const express = require('express');
const path = require('path');
const app = express();


//For Serving static files from the public folder......

const staticPath = path.join(__dirname,'../public')
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send('This is blank');
})
app.get('*', (req, res) => {
    res.render('404',{
        errorcomment:"Page doesn't exists"
    });
})
port = 3080;
app.listen(port, (err) => {
    if (err)
        console.log("An unexpected error has occurred\n" + err);
    else
        console.log(`Server is listening to http://localhost:${3080}`)
})