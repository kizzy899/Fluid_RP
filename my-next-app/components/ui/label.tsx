// components/ui/label.tsx
import React from "react";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ children, className = "" }) => {
  return (
    <label className={`text-gray-700 font-medium ${className}`}>
      {children}
    </label>
  );
};

export default Label; // ✅ 默认导出
