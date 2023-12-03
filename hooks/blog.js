import useSWR from "swr";
import fetcher from "../lib/fetch";

export function useBlog() {
    if (typeof window != "undefined") {

        const { data, mutate } = useSWR(window.location.protocol + "//" + window.location.host + "/api/getBlogs", fetcher);
        const blog = data?.blog;
        return [blog, { mutate }];
    }
    else {
        return [null, null];
    }
}
