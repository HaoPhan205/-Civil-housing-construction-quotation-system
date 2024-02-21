import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './SliderContent.css'


export default function SliderContent({ title, image }) {
    return (
        <div>
            <Card className='card'>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={title}
                    className='media'
                />
                <CardContent className='content'>
                    <Typography className='title' gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Button className='button-detail'>Xem chi tiết</Button>
                </CardContent>
            </Card>
        </div>
    )
}
