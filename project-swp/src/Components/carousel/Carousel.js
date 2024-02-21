import { IconButton, Paper, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Carousel.css'
import image1 from '../../assets/demo_carousel1.png';
import image2 from '../../assets/demo_carousel2.png';

const items = [
    <img className='carousel_pic' key="1" src="https://stdecor.com.vn/wp-content/uploads/2022/01/xay-nha-tron-goi-phan-thiet-binh-thuan.jpg" alt="Slide 1" style={{ width: '100%' }} />,
    <img className='carousel_pic' key="2" src="https://stdecor.com.vn/wp-content/uploads/2021/05/xay-nha-tron-goi-tay-ninh-nha-thau-xay-dung-uy-tin-stdecor.jpg" alt="Slide 2" style={{ width: '100%'}} />,
]

export default function Carousel({ interval = 3000 }) {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const maxSteps = items.length;



    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, [activeStep, interval]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <div className='carousel_container'>

            {/* Hiển thị slide hiện tại dựa trên activeStep */}
            <Paper square elevation={0} sx={{ display: 'inline-block', width: '100%', height:'100%' }} >
                {items[activeStep]}
            </Paper>
            <div className='carousel_button'>
                <IconButton className='back' onClick={handleBack} disabled={maxSteps <= 1}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton className='next' onClick={handleNext} disabled={maxSteps <= 1}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </div>
        </div>
    )
}
