"use client";

import { useMemo, useState } from "react";
import { Calculator, IndianRupee, Send } from "lucide-react";

export function MortgageTool() {
  const [price, setPrice] = useState(25000000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(8.6);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const principal = price * (1 - down / 100);
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return {
      principal,
      emi: Number.isFinite(emi) ? emi : 0,
      stampDuty: price * 0.06,
      cashNeeded: price * (down / 100) + price * 0.06,
    };
  }, [price, down, rate, years]);

  return (
    <div className="split">
      <div className="calculator-panel">
        <div className="card-topline">
          <span>
            <Calculator size={14} /> Finance tool
          </span>
          <span>Estimate</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 38 }}>
          EMI and cash-needed estimator
        </h2>
        <div className="field">
          <label>Property price</label>
          <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" />
        </div>
        <div className="field">
          <label>Down payment: {down}%</label>
          <input min={10} max={60} value={down} onChange={(e) => setDown(Number(e.target.value))} type="range" />
        </div>
        <div className="field">
          <label>Interest rate: {rate}%</label>
          <input min={6} max={12} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} type="range" />
        </div>
        <div className="field">
          <label>Tenure: {years} years</label>
          <input min={5} max={30} value={years} onChange={(e) => setYears(Number(e.target.value))} type="range" />
        </div>
      </div>
      <div className="tool-panel">
        <div className="card-body">
          <div className="brand-mark" style={{ marginBottom: 18 }}>
            <IndianRupee />
          </div>
          <h3>Estimated monthly payment</h3>
          <strong style={{ display: "block", marginTop: 14, color: "var(--forest)", fontSize: 46 }}>
            INR {Math.round(result.emi).toLocaleString("en-IN")}
          </strong>
          <p>
            Loan principal INR {Math.round(result.principal).toLocaleString("en-IN")}
            . Estimated stamp duty INR {Math.round(result.stampDuty).toLocaleString("en-IN")}.
          </p>
          <div className="compare-dock" style={{ position: "static" }}>
            <div>
              <strong>Cash needed</strong>
              <p>INR {Math.round(result.cashNeeded).toLocaleString("en-IN")}</p>
            </div>
            <button className="btn btn-primary" type="button">
              <Send size={16} />
              Send to advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
