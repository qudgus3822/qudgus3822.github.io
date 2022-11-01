import { nanoid } from "nanoid";

export async function insertBlog(db, { subject, content, writer, blogImage, category }) {
    return db
        .collection("Blog")
        .insertOne({
            _id: nanoid(12),
            subject: subject,
            content: content,
            writer: writer,
            blogImage: blogImage,
            category: category
        })
        .then(({ insertedId }) => insertedId);
}


export async function getBlogs(db) {
    return db
        .collection("Blog")
        .find({}).toArray();
}
