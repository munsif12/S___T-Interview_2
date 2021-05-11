const express = require("express");
const app = express();
const PORT = 8000;

//middleware
app.use(express.json());
//task one
var scores = [100, 200, 300, 400, 500, 600, 650, 750, 800];
var scoredby = [
  "Ali",
  "Badar",
  "Callum",
  "Danish",
  "Elon",
  "Faisal",
  "Ghani",
  "Hammad",
  "Irfan",
];
app.get("/", (req, res) => {
  res.send("working");
});
var rank = scores.map((val) => {
  if (val >= 0 && val <= 300) {
    return "Poor";
  }
  if (val >= 301 && val <= 500) {
    return "fair";
  }
  if (val >= 501 && val <= 650) {
    return "Good";
  }
  if (val >= 751 && val <= 800) {
    return "Excellent";
  }
  if (val >= 751 && val <= 800) {
    return "Elite";
  }
});
console.log(rank);
//making one object
var allUsersData = scores.map((val, i) => {
  return {
    score: scores[i],
    name: scoredby[i],
    rank: rank[i],
  };
});
console.log(allUsersData);

// task 1 backend done success
app.get("/user/scores", (req, res) => {
  res.status(200).json({ allUsersData });
});

//task 2 report completed
const count = {};
const result = [];
function find_duplicate_in_array(array) {
  array.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });
  for (let prop in count) {
    if (count[prop] >= 2) {
      result.push(prop);
    }
  }
  console.log(count);
  return result;
}

app.get("/report", (req, res) => {
  find_duplicate_in_array(rank);
  res.status(200).json({ userResult: count });
});

//task 3 post method done
app.post("/users", (req, res) => {
  console.log(req.body);
  const { name, rank } = req.body;
  const ifUserExists = allUsersData.find((el) => {
    return el.name === name;
  });
  if (ifUserExists) {
    const rank = ifUserExists.rank;
    res.status(200).json({ rank });
  } else {
    res.status(200).json({ message: "user Not Exist" });
  }
});
app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
