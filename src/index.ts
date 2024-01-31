const app = require("./app");

require("./db.ts");

const main = async () => {
  await app.listen(app.get("port"));
  console.log(`server on port ${app.get("port")}`);
};

main();
