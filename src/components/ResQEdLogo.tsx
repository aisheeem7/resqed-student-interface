import logo from "@/assets/resqed-logo.png";

export const ResQEdLogo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "h-12 w-12",
    default: "h-20 w-20",
    large: "h-28 w-28"
  };

  return (
    <img 
      src={logo} 
      alt="ResQEd Logo" 
      className={`${sizeClasses[size]} object-contain`}
    />
  );
};
