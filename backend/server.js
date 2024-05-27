// index.js
import app from "./app.js";

// const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
