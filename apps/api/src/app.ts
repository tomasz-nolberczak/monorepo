import { IResponseJson } from "@pizza-hero/interfaces";
import cors from "cors";
import { differenceInMinutes } from "date-fns";
import express from "express";

const app = express();
const port = 3002;

app.use(cors());

app.get("/order", (req, res) => {
  const timeTillPizza = differenceInMinutes(
    new Date(2022, 6, 5, 16, 30, 0),
    new Date()
  );

  const responseJson: IResponseJson = {
    status: "ok",
    message: `Pizza ordered!  ${
      timeTillPizza > 0
        ? `Will be in ${timeTillPizza} minutes`
        : "Should be now!"
    }`,
  };

  return res.json(responseJson);
});

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
