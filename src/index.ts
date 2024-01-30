import myapp from "./app";
import "./db.js";

const main = async () => {
  await myapp.listen(myapp.get("port"));
  console.log(`server on port ${myapp.get("port")}`);
};

main();
