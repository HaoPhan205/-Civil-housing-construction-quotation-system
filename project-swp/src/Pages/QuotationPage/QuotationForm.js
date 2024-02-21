import React, { useState } from 'react';

function QuotationForm({ onSubmit }) {
  const [area, setArea] = useState('');
  const [quality, setQuality] = useState('standard');

  const handleSubmit = (e) => {
    e.preventDefault();
    const quotationPrice = calculateQuotation(area, quality);
    onSubmit(quotationPrice);
  };

  const calculateQuotation = (area, quality) => {
    const basePrice = 500; // Giả sử 500 là giá cơ bản cho mỗi m2
    const qualityMultiplier = quality === 'high' ? 1.2 : quality === 'standard' ? 1 : 0.8;
    return basePrice * area * qualityMultiplier;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Diện tích (m2):</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Chất lượng:</label>
        <select value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="high">Cao</option>
          <option value="standard">Tiêu chuẩn</option>
          <option value="economical">Tiết kiệm</option>
        </select>
      </div>
      <button type="submit">Tính giá</button>
    </form>
  );
}

export default QuotationForm;
