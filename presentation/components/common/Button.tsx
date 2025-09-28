import { ButtonProps } from "@/domain/entities";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  // Tailwind variant styles
  const baseStyles =
    "rounded-lg font-medium transition duration-300 focus:outline-none";

  const variantStyles: Record<typeof variant, string> = {
    primary: "bg-black text-white hover:bg-gray-800 border-2 border-black",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 border-2 border-gray-200",
    outline:
      "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
  };

  const sizeStyles: Record<typeof size, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-10 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}>
      {label}
    </button>
  );
};

export default Button;
