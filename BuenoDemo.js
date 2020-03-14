import React from "react";

const BuenoDemo = props => {
    const { width, height, bgColor, childern } = props;
    return (
        <div
            style={{
                width: width || 200,
                height: height || 200,
                backgroundColor: bgColor || "green",
                color: color || "black"
            }}
        >
            {childern}
        </div>
    );
};

export default BuenoDemo;