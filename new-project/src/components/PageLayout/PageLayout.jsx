import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'

export default function PageLayout({ children }) {
    return (
        <>
            <Header />
            <Container 
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '20px',
            }}>
                {children}
            </Container>
            <Footer />
        </>
    )
}
