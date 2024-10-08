const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ msg: "Hello World!" });
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
