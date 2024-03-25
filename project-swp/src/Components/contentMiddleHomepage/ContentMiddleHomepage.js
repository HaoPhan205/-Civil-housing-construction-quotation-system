import React, { useEffect, useState } from "react";
import "./ContentMiddleHomepage.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContentMiddleHomepage() {
  const initialItemsCount = 6;

  const [visibleItems, setVisibleItems] = useState(initialItemsCount);

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const [house, setHouses] = useState([]);

  const fetchHouse = async () => {
    const response = await axios.get(
      "https://65f3f34a105614e654a18199.mockapi.io/house"
    );
    setHouses(response.data);
  };
  useEffect(() => {
    fetchHouse();
  }, []);

  const [duan, setDuan] = useState([]);

  const fetchDuan = async () => {
    const response = await axios.get(
      "https://65f3f34a105614e654a18199.mockapi.io/duan"
    );
    setDuan(response.data);
  };
  useEffect(() => {
    fetchDuan();
  }, []);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + initialItemsCount);
  };

  const showLessItems = () => {
    setVisibleItems(initialItemsCount);
  };

  return (
    <div className="container">
      <div className="container-grid-upper">
        <div className="section-header" style={{ marginBottom: "2em" }}>
          <h2 className="section-title">NHỮNG CÔNG TRÌNH ĐÃ THI CÔNG</h2>
        </div>

        <Grid container spacing={2}>
          {house.slice(0, visibleItems).map((house, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="item">
              <Card className="card">
                <CardMedia
                  component="img"
                  height="300"
                  image={house.imgPath}
                  alt={house.label}
                  className="media"
                />
                <CardContent className="content">
                  <Typography
                    className="title"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {house.label}
                  </Typography>
                  <Link to="/baogia">
                    <Button className="button-detail">Xem báo giá</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {visibleItems < house.length && (
          <Button
            className="button-below"
            size="medium"
            variant="contained"
            style={{ marginBottom: "3em", marginRight: "10px" }}
            onClick={showMoreItems}
          >
            Xem thêm
          </Button>
        )}
        {visibleItems > initialItemsCount && (
          <Button
            className="button-below"
            size="medium"
            variant="contained"
            style={{ marginBottom: "3em" }}
            onClick={showLessItems}
          >
            Thu gọn
          </Button>
        )}
      </div>
      <br />

      <div className="container-grid-lower">
        <div className="section-header" style={{ marginBottom: "2em" }}>
          <h2 className="section-title">MẪU THIẾT KẾ NHÀ HIỆN ĐẠI</h2>
        </div>
        <div className="section-button">
          <Button
            className="section-button-detail"
            size="medium"
            variant="contained"
            onClick={() => handleFilterChange("all")}
          >
            Tất cả
          </Button>
          <Button
            className="section-button-detail"
            size="medium"
            variant="contained"
            onClick={() => handleFilterChange("pho")}
          >
            Mẫu nhà phố
          </Button>
          <Button
            className="section-button-detail"
            size="medium"
            variant="contained"
            onClick={() => handleFilterChange("bietthu")}
          >
            Mẫu nhà biệt thự
          </Button>
          <Button
            className="section-button-detail"
            size="medium"
            variant="contained"
            onClick={() => handleFilterChange("sanvuon")}
          >
            Mẫu nhà có sân vườn
          </Button>
        </div>

        <Grid container spacing={2}>
          {duan
            .filter(
              (duanItem) => filter === "all" || duanItem.catagory === filter
            )
            .slice(0, visibleItems)
            .map((duan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className="item">
                <Card className="card">
                  <CardMedia
                    component="img"
                    height="300"
                    image={duan.imgPath}
                    alt={duan.label}
                    className="media"
                    catagory={duan.catagory}
                  />
                  <CardContent className="content">
                    <Typography
                      className="title"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {duan.label}
                    </Typography>
                    <Link to="/baogia">
                      <Button className="button-detail">Xem báo giá</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        {visibleItems < duan.length && (
          <Button
            className="button-below"
            size="medium"
            variant="contained"
            style={{ marginBottom: "3em", marginRight: "10px" }}
            onClick={showMoreItems}
          >
            Xem thêm
          </Button>
        )}
        {visibleItems > initialItemsCount && (
          <Button
            className="button-below"
            size="medium"
            variant="contained"
            style={{ marginBottom: "3em" }}
            onClick={showLessItems}
          >
            Thu gọn
          </Button>
        )}
      </div>
    </div>
  );
}
