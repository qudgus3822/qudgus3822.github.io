// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import all from "../../middlewares/index";
import { extractUser } from "../../lib/api-helper";
import { insertUser, findUserByEmail } from "../../db/index";
const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const userId = await insertUser(req.db, {
    email,
    password: hashedPassword,
    name,
  });
});

export default handler;
