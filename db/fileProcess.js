import { Octokit } from "@octokit/core";

export async function readFile(fileName) {
    try {
        const octokit = new Octokit({ auth: `${process.env.GitHubAccessToken}` });
        const response = await octokit.request(`GET /repos/qudgus3822/qudgus3822.github.io/contents/${fileName}`, {
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
    } catch (error) {
        return null
    }

}


export async function uploadFile(fileName, content) {
    let response;
    try {
        const octokit = new Octokit({
            auth: `${process.env.GitHubAccessToken}`
        });

        try {
            response = await octokit.request(`GET /repos/qudgus3822/qudgus3822.github.io/contents/${fileName}`, {
                owner: 'OWNER',
                repo: 'REPO',
                path: 'PATH',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
        } catch (error) {

        }

        let sha = "";
        let existContent = [];
        if (response && response.data) {
            sha = response.data.sha;
            existContent = JSON.parse(atob(response.data.content));
        }
        existContent.push(content);

        response = await octokit.request(`PUT /repos/qudgus3822/qudgus3822.github.io/contents/${fileName}`, {
            owner: 'OWNER',
            repo: 'REPO',
            path: 'PATH',
            message: 'my commit message',
            committer: {
                name: 'qudgus3822',
                email: 'xgame1123@naver.com'
            },
            sha: sha,
            content: btoa(unescape(encodeURIComponent(JSON.stringify(existContent)))),
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    } catch (error) {

    }

    return response;
}