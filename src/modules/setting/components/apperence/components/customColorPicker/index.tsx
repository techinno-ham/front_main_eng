import React, { useState } from "react"

const CustomColorPicker = ({ name, value, onChange }) => {
    const [selectedColor, setSelectedColor] = useState(value)

    const gradients = [
        "linear-gradient(to bottom right, #31c48d, #1c64f2)",
        "linear-gradient(to bottom right, #7e3af2, #3f83f8)",
        "linear-gradient(to right, #06b6d4, #3f83f8)",
        "linear-gradient(to right, #9061f9, #e74694)",
        "linear-gradient(to bottom right, #e74694, #ff8a4c)",
        "#D9E3F0",
        "#F47373",
        "#697689",
        "#37D67A",
    ]

    const handleColorClick = (color: any) => {
        setSelectedColor(color)
        onChange(name, color)
    }

    return (
        <div
            className="block-picker mt-4"
            style={{
                width: "170px",
                background: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px",
                borderRadius: "6px",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "0px",
                    height: "0px",
                    borderStyle: "solid",
                    borderWidth: "0px 10px 10px",
                    borderColor: `transparent transparent ${selectedColor}`,
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    marginLeft: "-10px",
                }}
            ></div>
            <div
                style={{
                    height: "110px",
                    background: selectedColor,
                    borderRadius: "6px 6px 0px 0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        fontSize: "12px",
                        color: "#000",
                        position: "relative",
                    }}
                >
                    {selectedColor}
                </div>
            </div>
            <div style={{ padding: "10px" }}>
                <div style={{ marginRight: "-10px" }}>
                    {gradients.map((gradient, index) => (
                        <span key={index}>
                            <div
                                title={gradient}
                                style={{
                                    background: gradient,
                                    height: "22px",
                                    width: "22px",
                                    cursor: "pointer",
                                    position: "relative",
                                    outline: "none",
                                    float: "left",
                                    marginRight: "10px",
                                    marginBottom: "10px",
                                    borderRadius: "4px",
                                }}
                                onClick={() => handleColorClick(gradient)}
                            ></div>
                        </span>
                    ))}
                    <div style={{ clear: "both" }}></div>
                </div>
                <div style={{ position: "relative" }}>
                    <input
                        id="rc-editable-input-1"
                        spellCheck="false"
                        value={selectedColor}
                        style={{
                            width: "100%",
                            fontSize: "12px",
                            color: "#666",
                            border: "0px",
                            outline: "none",
                            height: "22px",
                            boxShadow:
                                "rgb(221, 221, 221) 0px 0px 0px 1px inset",
                            borderRadius: "4px",
                            padding: "0px 7px",
                            boxSizing: "border-box",
                        }}
                        onChange={(e) => handleColorClick(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomColorPicker
