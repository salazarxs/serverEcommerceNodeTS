//import app from "./app";
import myapp from "./app";
require("./db.js");

const main = async () => {
  await myapp.listen(myapp.get("port"));
  console.log(`server on port ${myapp.get("port")}`);
};

main();
