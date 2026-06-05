import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'

export default function PageLayout({ children }) {
    return (
        <>
            <Header />
            <Container sx={{ py: 4 }}>{children}</Container>
            <Footer />
        </>
    )
}
