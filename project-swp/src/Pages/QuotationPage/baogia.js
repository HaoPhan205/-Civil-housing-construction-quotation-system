import React, { useState } from "react";

const QuoteForm = () => {
  const [houseType, setHouseType] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [floors, setFloors] = useState("");
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const area = width * length;
    const basePrice = 500;
    let price = area * floors * basePrice;

    if (houseType === "biệt thự") price *= 1.5;
    if (constructionType === "trọn gói") price *= 1.2;

    setResult(`Tổng chi phí ước tính: ${price.toLocaleString()} VND`);
  };

  // Xử lý đặt lại form
  const resetForm = () => {
    setHouseType("");
    setConstructionType("");
    setWidth("");
    setLength("");
    setFloors("");
    setResult(null);
  };

  return (
    <div className="container">
      <h2>Báo giá xây dựng</h2>
      <div className="form-group">
        <label>Chọn loại nhà:</label>
        <select
          value={houseType}
          onChange={(e) => setHouseType(e.target.value)}
        >
          <option value="">Vui lòng chọn</option>
          <option value="nhapho">Nhà phố</option>
          <option value="capbon">Nhà cấp bốn</option>
          <option value="bietthu">Biệt thự</option>
        </select>
      </div>
      <div className="form-group">
        <label>Chọn hình thức xây nhà:</label>
        <select
          value={constructionType}
          onChange={(e) => setConstructionType(e.target.value)}
        >
          <option value="">Vui lòng chọn</option>
          <option value="phantho">Xây nhà phần thô</option>
          <option value="trongoi">Xây nhà trọn gói</option>
        </select>
      </div>
      <div className="form-group">
        <label>Hình thức xây dựng:</label>
        <select
          value={constructionType}
          onChange={(e) => setConstructionType(e.target.value)}
        >
          <option value="">Chọn hình thức</option>
          <option value="phần thô">Xây nhà phần thô</option>
          <option value="trọn gói">Xây nhà trọn gói</option>
        </select>
      </div>
      <div className="form-group">
        <label>Chiều rộng (m²):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          step="0.1"
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Chiều dài (m²):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          step="0.1"
          required="required"
        />
      </div>
      <div className="form-group">
        <label>Số tầng:</label>
        <input
          type="number"
          value={floors}
          onChange={(e) => setFloors(e.target.value)}
          step="1"
          required="required"
        />
      </div>
      <div>
        <button onClick={calculateResult}>Tính kết quả</button>
        <button onClick={resetForm} style={{ backgroundColor: "#6c757d" }}>
          Làm lại
        </button>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default QuoteForm;
