
export function commonIsAdmin() {
    const cookies = document.cookie;
    if (cookies.includes("qudgus")) {
        return true;
    }
    else {
        return false;
    }
}