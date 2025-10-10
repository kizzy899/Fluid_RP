import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
  variant?: "solid" | "outline" // 新增 variant 支持
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "solid",
  className = "",
  children,
  ...props
}) => {
  const sizeClass =
    size === "lg" ? "px-12 py-4 text-lg" : size === "md" ? "px-8 py-2" : "px-4 py-1"

  const variantClass =
    variant === "outline"
      ? "border border-gray-600 bg-transparent hover:border-purple-500"
      : "bg-purple-600 hover:bg-purple-700 text-white"

  return (
    <button {...props} className={`${sizeClass} ${variantClass} ${className}`}>
      {children}
    </button>
  )
}

export default Button
