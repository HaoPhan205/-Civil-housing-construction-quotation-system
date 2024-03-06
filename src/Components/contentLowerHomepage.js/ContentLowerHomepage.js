import { Button, Grid } from '@mui/material'
import React from 'react'
import './ContentLowerHomePage.css'

export default function ContentLowerHomepage() {
  return (
    <div>
      <Grid container spacing={0} columns={16}>
        <Grid item xs={8} className='content-lower-image'>

          <img src='https://xaydungcuonggiahieu.com/data/upload/2022/09/thi%E1%BA%BFt%20k%E1%BA%BF%20nh%C3%A0%20ph%E1%BB%91/10-mau-nha-pho-2-tang-5x13m.jpg' />

        </Grid>
        <Grid item xs={8} className='content-lower-inner' style={{ flexDirection: "column" }}>

          <div className="section-header">
            <h2 className="section-title" style={{ color: "yellow" }}>THÔNG TIN NHÀ THẦU</h2>
          </div>
          <p className='content-lower-inner-description' style={{ color: "white" }}>
            Chúng tôi cam kết cung cấp thông tin báo giá từ các nhà thầu đáng tin cậy, với mức giá thành phù hợp với nhu cầu và mục đích cụ thể của bạn.
            Từ dự án nhỏ đến các dự án lớn, chúng tôi luôn tìm kiếm các giải pháp tối ưu nhất để đáp ứng yêu cầu của quý khách hàng.
            Với mạng lưới đối tác rộng khắp và kinh nghiệm trong việc tư vấn và đàm phán, chúng tôi sẽ giúp bạn tìm ra giải pháp tốt nhất với chi phí hợp lý và chất lượng đảm bảo.
          </p>
          <div className='button-lower-inner-detail' style={{ display: "flex" }}>
            <div className="line line-content-inner" style={{color:"yellow"}}></div>
            <Button className='button-lower-inner-detail-first' variant='text'>Xem thêm</Button>
            <Button className='button-lower-inner-detail-second' variant='contained'>Liên hệ</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
