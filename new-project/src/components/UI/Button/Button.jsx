import { Button as MuiButton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Button({
    to,
    children,
    variant = 'contained',
    color = 'primary',
    className,
    ...rest
}) {
    if (to) {
        return (
            <MuiButton
                component={Link}
                to={to}
                variant={variant}
                color={color}
                className={className}
                {...rest}
            >
                {children}
            </MuiButton>
        )
    }

    return (
        <MuiButton variant={variant} color={color} className={className} {...rest}>
            {children}
        </MuiButton>
    )
}
