/** @format */

import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import "./baogia.css";
import { useState } from "react";
import { Spin, Tag, message } from "antd";

export const BaoGiaModal = ({ baogia }) => {
  const { addComment, getStatus } = useBaoGia();
  const data = [
    {
      label: "Họ tên",
      data: baogia.hoten,
    },
    {
      label: "Email",
      data: baogia.email,
    },
    {
      label: "Số điện thoại",
      data: baogia.sdt,
    },
    {
      label: "Địa chỉ",
      data: baogia.diachi,
    },
    {
      label: "Loại nhà",
      data: baogia.loainha,
    },
    {
      label: "Phong cách",
      data: baogia.phongcach,
    },
    {
      label: "Số tầng",
      data: baogia.sotang,
    },
    {
      label: "Loại móng",
      data: baogia.loaimong,
    },
    {
      label: "Loại mái",
      data: baogia.loaimai,
    },
    {
      label: "Hình thức",
      data: baogia.hinhthuc,
    },
    {
      label: "Diện tích khu dất",
      data: `${Number(baogia.dientichkhudat).toLocaleString()} m²`,
    },
    {
      label: "Diện tích xây dựng",
      data: `${Number(baogia.dientichxaydung).toLocaleString()} m²`,
    },
    {
      label: "Ngày dự kiến",
      data: baogia.ngaydukien,
    },
    {
      label: "Ngân sách dự kiến",
      data: `${Number(baogia.ngansachdukien).toLocaleString()} VND`,
    },
    {
      label: "Yêu cầu đặc biệt",
      data: baogia.yeucaudacbiet,
    },
    {
      label: "Trạng thái",
      data: baogia.status,
    },
  ];

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const addNewBaoGia = async () => {
    if(comment.trim().length === 0) return;
    
    setLoading(true);

    const addSignal = await addComment(baogia, comment);

    if (addSignal) {
      setComment("");
    } else {
      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }

    setLoading(false);
  };
  return (
    <>
      <div className="currData_Container">
        {data.map((currData, i) => {
          return (
            <div className="CurrData" key={i}>
              <div className="CurrData_Title">{currData.label}: </div>
              {currData.label === "Trạng thái" ? (
                <div className="CurrData_Data">{getStatus(currData.data)}</div>
              ) : (
                <div className="CurrData_Data">{currData.data}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="CurrBaoGia_CommentBoxTitle">Phản hồi</div>
      {baogia.comments.length === 0 && (
        <div className="CurrBaoGia_noComment">
          Báo giá này hiện chưa có phản hồi nào
        </div>
      )}
      <div className="commentContainer">
        {baogia.comments.map((comment, i) => (
          <div
            className="commentBox"
            key={i}
          >
            <div className="commentHeader">
              <div className="commentUser">{comment.user}</div>
              <div className="commentTime">{comment.date}</div>
            </div>
            <div className="commentContent">{comment.comment}</div>
          </div>
        ))}
      </div>
      {(baogia.status === 0 || baogia.status === 3) && (
        <>
          <textarea
            row={10}
            className="CurrBaoGia_CommentBox"
            placeholder="Tôi muốn biết thêm..."
            onChange={(e) => setComment(e.target.value.replace("\n", ""))}
            value={comment}
          />
          <Spin spinning={loading}>
            <button
              className="CurrBaoGia_SendComment"
              onClick={addNewBaoGia}
            >
              Gửi phản hồi
            </button>
          </Spin>
        </>
      )}
    </>
  );
};
