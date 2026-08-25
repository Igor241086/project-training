import { Outlet, Link } from 'react-router-dom'
import PageLayout from './components/PageLayout/PageLayout'

export default function App() {
    return (
        <PageLayout>
            <nav className="main-nav">
                <Link to="/">Каталог</Link>
                <Link to="/products">Админка</Link>
            </nav>
            <Outlet />
        </PageLayout>
    )
}
