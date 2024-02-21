import React from 'react'
import './ContentMiddleHomepage.css'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography, useTheme } from '@mui/material';

export default function ContentMiddleHomepage() {
    const mockDesigns = [
        {
            id: 1,
            label: 'Thiết kế nhà phố hiện đại',
            imgPath: 'https://xdnamthienphat.vn/wp-content/uploads/2019/07/phan-loai-cac-nha-dan-dung-1.png', // Đường dẫn tới hình ảnh mẫu trong thư mục public của bạn
        },
        {
            id: 2,
            label: 'Thiết kế nhà phố cổ điển',
            imgPath: 'https://xdnamthienphat.vn/wp-content/uploads/2019/07/phan-loai-cac-nha-dan-dung-1.png',
        },
        {
            id: 3,
            label: 'Thiết kế nhà phố với sân vườn',
            imgPath: 'https://xdnamthienphat.vn/wp-content/uploads/2019/07/phan-loai-cac-nha-dan-dung-1.png',
        },


    ];

    return (
        <div className='container'>
            <div className='container-grid-upper'>
                <div className="section-header" style={{ marginBottom: "2em" }}>
                    <h2 className="section-title">NHỮNG CÔNG TRÌNH ĐÃ THI CÔNG</h2>
                </div>

                <Grid container spacing={2}>
                    {mockDesigns.map((house, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className='item'>
                            <Card className='card'>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={house.imgPath}
                                    alt={house.label}
                                    className='media'
                                />
                                <CardContent className='content'>
                                    <Typography className='title' gutterBottom variant="h5" component="div">
                                        {house.label}
                                    </Typography>
                                    <Button className='button-detail'>Xem chi tiết</Button>
                                </CardContent>
                            </Card>


                        </Grid>
                    ))}

                </Grid>
                <Button className='button-below' size="medium" variant='contained' style={{ marginBottom: '3em' }}>Xem thêm</Button>
            </div>

            <div className='container-grid-lower'>
                <div className="section-header" style={{ marginBottom: "2em" }}>
                    <h2 className="section-title">MẪU THIẾT KẾ NHÀ HIỆN ĐẠI</h2>
                </div>
                <div className='section-button'>
                    <Button className='section-button-detail' size="medium" variant='contained'>Mẫu nhà phố</Button>
                    <Button className='section-button-detail' size="medium" variant='contained'>Mẫu nhà biệt thự</Button>
                    <Button className='section-button-detail' size="medium" variant='contained'>Mẫu nhà có sân vườn</Button>
                </div>

                <Grid container spacing={2}>
                    {mockDesigns.map((house, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} className='item'>
                            <Card className='card'>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={house.imgPath}
                                    alt={house.label}
                                    className='media'
                                />
                                <CardContent className='content'>
                                    <Typography className='title' gutterBottom variant="h5" component="div">
                                        {house.label}
                                    </Typography>
                                    <Button className='button-detail'>Xem chi tiết</Button>
                                </CardContent>
                            </Card>


                        </Grid>
                    ))}

                </Grid>
                <Button className='button-below' size="medium" variant='contained' style={{ marginBottom: '3em' }}>Xem thêm</Button>
            </div>
        </div>

    )
}
