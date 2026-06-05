import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function ProductForm() {
    return (
        <><TextField
            label="Title"
            fullWidth /><TextField
                label="Price"
                type="number"
                fullWidth /><TextField
                label="Description"
                multiline
                rows={4}
                fullWidth /><Button variant="contained">
                Save
            </Button></>
    )
}
