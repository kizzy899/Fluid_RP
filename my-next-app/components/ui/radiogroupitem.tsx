import React from "react"

interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
  children: React.ReactNode
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, className, children }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child

        // 给每个 RadioGroupItem 注入 checked 和 onChange
        return React.cloneElement(child, {
          checked: child.props.value === value,
          onChange: () => onValueChange(child.props.value)
        })
      })}
    </div>
  )
}

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id, className, checked, onChange }) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      className={className}
      checked={checked}
      onChange={onChange}
    />
  )
}
