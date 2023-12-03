export function getBase64(file) {
    let promise = new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            return resolve(reader.result);
        };
        reader.onerror = reject;
    })


    return promise;
}