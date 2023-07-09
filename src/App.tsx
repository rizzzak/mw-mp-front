import { Suspense } from 'react'
import PublicRoutes from 'src/routes/PublicRoutes'
import PrivateRoutes from 'src/routes/PrivateRoutes'
const App = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <PublicRoutes />
            <PrivateRoutes />
        </Suspense>
    )
}
export default App

