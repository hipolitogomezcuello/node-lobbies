// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sequelize from "../../src/config/sequelize";

export default (req, res) => {
  res.statusCode = 200;
  sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", error));
  res.json({ name: "John Doe" });
};
