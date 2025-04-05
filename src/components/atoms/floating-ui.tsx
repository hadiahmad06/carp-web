import React from "react";

type FloatingUIProps = {
  title: string;
  text: string;
  icon: string;
  bgColor: string;
  textColor: string;
  animationDelay?: string;
  animationDuration?: string;
  xOffset?: string;
  yOffset?: string;
};

const FloatingUI: React.FC<FloatingUIProps> = ({
  title,
  text,
  icon,
  bgColor,
  textColor,
  animationDelay = "400ms",
  animationDuration = "3s",
  xOffset = "0px",
  yOffset = "0px",
}) => {
  return (
    <div
      className="animate-float"
      style={{
        animationDelay,
        animationDuration,
        transform: `translate(${xOffset}, ${yOffset})`,
      }}
    >
      <div className="glass-effect p-4 rounded-xl shadow-md">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor}`}
          >
            <span className={`${textColor} text-xs`}>{icon}</span>
          </div>
          <div className="ml-2">
            <div className="font-medium text-sm">{title}</div>
            <div className="text-2xs text-muted-foreground">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingUIContainer: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right" | "top" | "middle" | "center";
  xOffset?: string;
  yOffset?: string;
  children: React.ReactNode;
}> = ({ position, xOffset = "0px", yOffset = "0px", children }) => {
  const positionClasses = {
    "top-left": "top-[20%] left-0",
    "top-right": "top-[20%] right-0",
    "bottom-left": "bottom-[25%] left-0",
    "bottom-right": "bottom-[25%] right-0",
    "left": "top-1/2 left-0 transform -translate-y-1/2",
    "right": "top-1/2 right-0 transform -translate-y-1/2",
    "top": "top-0 left-1/2 transform -translate-x-1/2",
    "middle": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "center": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} flex flex-col space-y-4 justify-center items-center`}
      style={{
        transform: `translate(${xOffset}, ${yOffset})`,
      }}
    >
      {children}
    </div>
  );
};

export { FloatingUI, FloatingUIContainer };