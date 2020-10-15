import React from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import "./style.css";
interface IProps {
  placeholder?: string;
  value: string;
  onChange(value?: string): void;
  length: number;
}

export default function VerificationInput({ length, value, onChange, placeholder }: IProps) {
  return (
    <div className='custom-styles'>
      <ReactInputVerificationCode value={value} length={length || 6} onChange={onChange} placeholder={placeholder || ""} />
    </div>
  );
}
