import React from "react";

interface DashedCurvedArrowProps {
    width?: number | string;
    color?: string;
    className?: string;
}

const DashedCurvedArrow: React.FC<DashedCurvedArrowProps> = ({ width = 200, color = "#94b8d7", className = "" }) => {
    return (
        <svg
            width={width}
            viewBox="0 0 300 100" // Defines the canvas size
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* The Curved Line */}
            <path
                d="M20,80 Q150,-50 280,80" // Mathematical curve logic
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10, 10" // This creates the dashed effect
                fill="none"
            />

            {/* The Arrowhead */}
            <path
                d="M280,80 L270,55 M280,80 L255,75" // Arrow tip coordinates
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default DashedCurvedArrow;
