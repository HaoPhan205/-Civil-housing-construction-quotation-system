import React from 'react'
import Carousel from '../carousel/Carousel'
import { Card } from 'antd'

export default function ContentCarousel() {
    return (
        <div><Carousel autoplay>
            <div>
                <Card hoverable cover={<img alt="example" src="image-src-1.jpg" />}>
                    {/* Card content */}
                </Card>
            </div>
            <div>
                <Card hoverable cover={<img alt="example" src="image-src-2.jpg" />}>
                    {/* Card content */}
                </Card>
            </div>
            <div>
                <Card hoverable cover={<img alt="example" src="image-src-3.jpg" />}>
                    {/* Card content */}
                </Card>
            </div>
            {/* Add more <div> elements for more carousel items */}
        </Carousel></div>
    )
}
