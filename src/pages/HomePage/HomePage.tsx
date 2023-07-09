import { Helmet } from 'react-helmet'
import { TestDiv } from 'src/pages/styled'
const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <title>Главная - MarketPlace</title>
        </Helmet>
        <TestDiv />
    </>
}
export default HomePage

