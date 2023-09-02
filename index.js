import express from "express";
import axios from "axios";

const app = express();
const port = 3000; 
const URL = "https://v2.jokeapi.dev/joke/Any"

app.use(express.static("public"));

app.get("/", async(req,res) => { 
    try {
        const response = await axios.get(URL);
        const result = response.data;
        const parsed = JSON.parse(JSON.stringify(result));
        console.log(parsed);
        res.render("main.ejs", { joke: parsed.joke, setup: parsed.setup, delivery: parsed.delivery});
        } catch (error) 
        { console.error("Failed to make request:", error.message);
          res.render("main.ejs", { error: JSON.stringify(error.message),
      });
    }
});

app.listen(port, (console.log("Your port number is 3000")));