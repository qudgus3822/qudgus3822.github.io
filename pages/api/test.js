// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import all from "../../middlewares/index";
import { extractUser } from "../../lib/api-helper";
import { insertUser, findUserByEmail } from "../../db/index";
import nc from "next-connect";
const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
    return res.json({ test: "test", test2: "정상입니다." });
});

export default handler;
