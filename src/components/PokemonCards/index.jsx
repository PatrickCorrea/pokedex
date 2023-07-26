import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { typeHandler } from '../../utils';

export default function PokemonCard({ name, image, types }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 180, cursor: "pointer" }} image={image} />
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div" marginLeft={1}>
                        {typeHandler(types)}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}