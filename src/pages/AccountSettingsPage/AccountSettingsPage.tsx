import { Helmet } from 'react-helmet'
import { TestDiv } from 'src/pages/styled'
const AccountSettingsPage: React.FC = () => {
    return <>
        <Helmet>
            <title>Account settings</title>
        </Helmet>
        <TestDiv><h1>Account Settings</h1></TestDiv>
    </>
}
export default AccountSettingsPage

