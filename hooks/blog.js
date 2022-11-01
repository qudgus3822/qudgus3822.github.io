import useSWR from "swr";
import fetcher from "../lib/fetch";

export function useBlog() {
    const { data, mutate } = useSWR("/api/getBlogs", fetcher);
    const blog = data?.blog;
    return [blog, { mutate }];
}
