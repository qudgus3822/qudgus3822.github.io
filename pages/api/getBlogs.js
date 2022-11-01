import nc from "next-connect";
import all from "../../middlewares/index";
import { getBlogs } from "../../db/blog";

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
    // // Filter out password
    // if (!req.Blog) return res.json({ user: null });
    // const { password, ...u } = req.user;
    // res.json({ user: u });
    const result = await getBlogs(req.db);
    return res.json({ blog: result });
});

handler.post(async (req, res) => {
    const result = await getBlogs(req.db);
    return res.json({ blog: result });
})

export default handler;
