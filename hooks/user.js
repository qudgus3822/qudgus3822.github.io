import useSWR from "swr";
import fetcher from "../lib/fetch";

export function useCurrentUser() {
  if (typeof window != "undefined") {

    const { data, mutate } = useSWR(window.location.protocol + "//" + window.location.host + "/nextjs-blog/api/user", fetcher);
    const user = data?.user;
    return [user, { mutate }];
  }
  else {
    return [null, {mutate : null}];
  }
}
