import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box sx={{ py: 3, textAlign: 'center' }}>
            <Typography variant="body2">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}
