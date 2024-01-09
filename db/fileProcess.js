import { Octokit } from "@octokit/core";

export async function readFile(fileName) {
    // const octokit = {};
    // const octokit = new Octokit({ auth: `${process.env.GitHubAccessToken}` });
    // let response;
    // try {
    //     response = await octokit.request(`GET /repos/qudgus3822/qudgus3822.github.io/contents/${path}`, {
    //         owner: 'qudgus3822',
    //         repo: 'qudgus3822.github.io',
    //         path: fileName,
    //         headers: {
    //             // 'X-GitHub-Api-Version': '2022-11-28',
    //             'If-None-Match': ''
    //         },
    //         request: {
    //             cache: 'reload'
    //         }
    //     });

    // } catch (error) {
    //     return null
    // }
    // finally {
    //     if (response && response.data) {
    //         const fetchData = await fetch(response.data.download_url);
    //         const obj = await fetchData.json();
    //         return obj;
    //     }
    // }
}


export async function uploadFile(fileName, content) {
    // let response;
    // const octokit = new Octokit({
    //     auth: `${process.env.GitHubAccessToken}`
    // });
    // try {
    //     response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    //         owner: 'qudgus3822',
    //         repo: 'qudgus3822.github.io',
    //         path: fileName,
    //         headers: {
    //             // 'X-GitHub-Api-Version': '2022-11-28',
    //             'If-None-Match': ''
    //         },
    //         request: {
    //             cache: 'reload'
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
    // finally {
    //     let sha = "";
    //     let existContent = [];
    //     if (response && response.data) {
    //         sha = response.data.sha;
    //         const fetchData = await fetch(response.data.download_url);
    //         existContent = await fetchData.json();
    //     }
    //     existContent.push(content);

    //     response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    //         owner: 'qudgus3822',
    //         repo: 'qudgus3822.github.io',
    //         path: fileName,
    //         message: 'my commit message',
    //         committer: {
    //             name: 'qudgus3822',
    //             email: 'xgame1123@naver.com'
    //         },
    //         sha: sha,
    //         content: btoa((JSON.stringify(existContent))),
    //         headers: {
    //             // 'X-GitHub-Api-Version': '2022-11-28',
    //             'If-None-Match': ''
    //         },
    //         request: {
    //             cache: 'reload'
    //         }
    //     })
    // }

    // return response;
}