/* import qs from 'query-string'
import { env } from '../../../../core/env'
import axios from 'axios'

function redirectToGithub() {
    const params = {
        response_type: 'code',
        scope: 'user',
        client_id: env.GITHUB_ID,
        redirect_url: env.REDIRECT_URL
    }
    const queryStrings = qs.stringify(params)
    const authURL = `${env.GITHUB_URL}?${queryStrings}`
    console.log(authURL)

    return authURL;

}

export async function gitHubAtuh() {
    const  code = axios.get(redirectToGithub())
    console.log(code);
  
}
*/