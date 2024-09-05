//개발
// const apiUrl = "https://dev-dplus-api.azurewebsites.net/";
// apim 개발
// let apiUrl = "https://dplusapimgmt-dev.azure-api.net/";
// apim 운영
const apiUrl = "https://dplusprd.azurefd.net/";

// const apiUrl = "http://localhost:10000/";
// if (process && process.env && process.env.API_URL) {
//     apiUrl = process.env.API_URL;
// }

async function httpGet(apiMethod, param) {
  try {
    const response = await fetch(
      apiUrl + "api/EpubViewer/" + apiMethod + "?" + new URLSearchParams(param),
      {
        method: "GET",
        mode: "cors",
        headers: {
          // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
          "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
          ver: "1.0",
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();
    return result.Data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function httpPost(apiMethod, param) {
  try {
    const response = await fetch(apiUrl + "api/EpubViewer/" + apiMethod, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(param),
      headers: {
        // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
        "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
        ver: "1.0",
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result.Data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function loginCheck(token, user) {
  try {
    const response = await fetch(apiUrl + "api/apps/login-check-userRe", {
      method: "POST",
      mode: "cors",
      headers: {
        // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
        "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
        ver: "1.0",
        "Content-Type": "application/json",
        access_token: token,
        user: user,
      },
    });
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function blockUser(memberNo, blockedMemberNo) {
  try {
    let param = {};
    param.MemberNo = memberNo.toString();
    param.BlockedMemberNo = blockedMemberNo.toString();
    const response = await fetch(apiUrl + "api/lounge/add-block-member", {
      method: "POST",
      mode: "cors",
      headers: {
        // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
        "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
        ver: "1.0",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function reportReview(
  contentFeedbackNo,
  notifyReasonKindCode,
  notifyReasonComment,
  notifyMemberNo,
) {
  try {
    let param = {};
    param.notifyReasonComment = notifyReasonComment.toString();
    param.notifyReasonKindCode = notifyReasonKindCode.toString();
    param.notifyNo = contentFeedbackNo.toString();
    param.notifyMemberNo = notifyMemberNo.toString();
    param.notifyKindCode = "008";
    param.parentNotifyNo = "0";
    const response = await fetch(apiUrl + "api/me/notify", {
      method: "POST",
      mode: "cors",
      headers: {
        // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
        "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
        ver: "1.0",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    });
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function getReview(bookId, UTC, MemberNo) {
  try {
    if (!UTC) {
      UTC = 9;
      UTC = UTC.toString();
    }

    bookId = bookId.toString();
    MemberNo = MemberNo.toString();
    const response = await fetch(
      apiUrl + `api/Book/${bookId}/reviews/${UTC}/${MemberNo}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
          "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
          ver: "1.0",
          "Content-Type": "application/json",
        },
      },
    );
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return "";
  }
}

async function getValueByCodeGroupCode(CodeGroupCode) {
  try {
    const response = await fetch(
      apiUrl + "api/me/common-code" + "?CodeGroupCode=" + CodeGroupCode,
      {
        method: "POST",
        mode: "cors",
        headers: {
          // "Ocp-Apim-Subscription-Key": "d2bfbf6c28e14eeea84ee569402cab26",
          "Ocp-Apim-Subscription-Key": "TXRsR01aV0pQVWJlYWNGSk8zMXBRUT09",
          ver: "1.0",
          "Content-Type": "application/json",
        },
      },
    );
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return "";
  }
}
