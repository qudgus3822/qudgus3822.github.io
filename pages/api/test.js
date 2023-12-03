export default function handler(req, res) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

    fetch(baseUrl + "/test.json")
        .then((res) => res.json())
        .then((text) => {
            // do something with "text"
            res.status(200).json(text);
        })
        .catch((e) => console.error(e));

    // fetch(baseUrl + "/test.json")
    //     .then((text) => {
    //         debugger

    //     });
    // res.status(200).json({ test: "test" });
}