import myapp from "./app";

require("./db.ts");

const main = async () => {
  await myapp.listen(myapp.get("port"));
  console.log(`server on port ${myapp.get("port")}`);
};

main();
