import msdata from '../mastdon.json'
import { useRecoilState } from 'recoil';
import { tokenState, codeState } from '../atom/state';

export const ConfirmPage = () => {

    const fqdn = msdata.fqdn
    const client_id = msdata.client_id
    const redirect_uri = msdata.redirect_uri
    const response_type = msdata.response_type

    const [code] = useRecoilState(codeState)
    const [token] = useRecoilState(tokenState)

    return (
        <div>
            <a href={fqdn + '/oauth/authorize?response_type=' + response_type + '&client_id=' + client_id + '&redirect_uri=' + redirect_uri}> click </a>
            {
                code && !token ?
                    <div>error: access_tokenが取得できません。もう一回押して</div>
                    :
                    ''
            }
        </div>
    )
}