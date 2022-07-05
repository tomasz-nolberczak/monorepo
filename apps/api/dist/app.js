"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const date_fns_1 = require("date-fns");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
app.use((0, cors_1.default)());
app.get("/order", (req, res) => {
    const timeTillPizza = (0, date_fns_1.differenceInMinutes)(new Date(2022, 7, 5, 16, 30, 0), new Date());
    const responseJson = {
        status: "ok",
        message: `Pizza ordered!  ${timeTillPizza > 0
            ? `Will be in ${timeTillPizza} minutes`
            : "Should be now!"}`,
    };
    return res.json(responseJson);
});
app.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
//# sourceMappingURL=app.js.map