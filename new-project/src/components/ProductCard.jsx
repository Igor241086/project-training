import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@mui/material'

export function ProductCard({ product }) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography color="text.secondary">${product.price}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}
