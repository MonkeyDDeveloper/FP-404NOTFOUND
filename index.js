const express = require("express");
const path = require("path");
const app = express();
const indexPage = path.join(__dirname, 'index.html');
const assets = path.join(__dirname, "assets");
const css = path.join(__dirname, "css");
const port = process.env.PORT || 3000;

app.use('/public/', express.static(assets))
app.use('/public/', express.static(css))

app.get('/', (req, res) => {
    res.sendFile(indexPage)
})

app.listen(port, () => console.log(`Application running on port ${port}`))