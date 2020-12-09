// import {createTokenAuth} from "https://cdn.skypack.dev/@octokit/auth-token";
// const auth = createTokenAuth("1234567890abcdef1234567890abcdef12345678");

const API = 'https://api.github.com';
const [, REPO] = location.pathname.split('/');

const user = {
  name: prompt('GitHub name'),
  token: prompt('GitHub token')
};

fetch(`${API}/repos/WebReflection/${REPO}/issues`, {
  headers: {
    // Authorization: 'Basic ' + btoa(`${user.name}:${user.password}`)
    Authorization: `token ${token}`
  }
}).then(b => b.json()).then(console.log);
