import express from "express";

const app = express();

const hostels = [
  {
    id: 1,
    name: "ABC Hostel",
    city: "Chennai",
    rating: 5.0,
    price_per_month: 2000,
    amenities:['wifi','TV'],
    description: "Modern hostel with great city view.",
  },

  {
    id: 2,
    name: "SkyView Hostel",
    city: "Chennai",
    rating: 4.2,
    price_per_month: 9000,
    amenities:['wifi','TV'],
    description: "Modern hostel with great city view.",
  },
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { hostels });
});

app.get("/hostels/:id", (req, res) => {
  const hostel = hostels.find((h) => h.id === Number(req.params.id));
  if (!hostel) {
    return res.status(404).send("Hostel not found");
  }
  res.render("hostel", { hostel });
});

app.listen(8080, () => {
  console.log("Connected");
});
