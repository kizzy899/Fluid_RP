// RadioGroup.tsx
import { ReactNode, Dispatch, SetStateAction } from "react";

interface RadioGroupProps {
  children: ReactNode;
  value?: string;
  onValueChange?: Dispatch<SetStateAction<string>>;
  className?: string;
}

const RadioGroup = ({ children, value, onValueChange, className }: RadioGroupProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default RadioGroup;
