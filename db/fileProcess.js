import { Octokit } from "@octokit/core";

export async function readFile(fileName) {
    const octokit = new Octokit({ auth: `${process.env.GitHubAccessToken}` });
    const response = await octokit.request(`GET /repos/qudgus3822/nextjs-blog/contents/${fileName}`, {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    if (response && response.data) {
        return JSON.parse(atob(response.data.content));
    }
}


export async function uploadFile(fileName, content) {
    const octokit = new Octokit({
        auth: `${process.env.GitHubAccessToken}`
    });
    const response = await octokit.request(`GET /repos/qudgus3822/nextjs-blog/contents/${fileName}`, {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    let sha = "";
    if (response && response.data) {
        sha = response.data.sha;
    }
    return await octokit.request(`PUT /repos/qudgus3822/nextjs-blog/contents/${fileName}`, {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        message: 'my commit message',
        committer: {
            name: 'qudgus3822',
            email: 'xgame1123@naver.com'
        },
        sha: sha,
        content: btoa(JSON.stringify(content)),
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}