import { Suspense } from 'react'
import PublicRoutes from 'src/routes/PublicRoutes'
import PrivateRoutes from 'src/routes/PrivateRoutes'
import Header from 'src/features/Header'
import { AppStyles, Footer, PageWrapper } from 'src/App.styled'
const App = () => {
    return <>
        <AppStyles />
        <Header />
        <PageWrapper>
            <Suspense fallback={'Loading...'}>
                <PublicRoutes />
                <PrivateRoutes />
            </Suspense>
        </PageWrapper>
        <Footer>
            <div>(c) MarketPlace, 2023</div>
        </Footer>
    </>
}
export default App

