export function commonIsAdmin() {
  const cookies = document.cookie;
  if (cookies.includes("qudgus")) {
    return true;
  } else {
    return false;
  }
}

export default function fetcher(url: string) {
  return fetch(url).then((r) => r.json());
}

export function getBase64(file: File): Promise<string> {
  let promise: Promise<string> = new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        reject("base64 변환 실패");
      } else {
        return resolve(reader.result);
      }
    };
    reader.onerror = reject;
  });

  return promise;
}
