"use client"
import React from "react";
import { Bars } from "react-loader-spinner";

const CustomLoader = () => {
    return (
        <div className="custom-loader-overlay">
            <div className="custom-loader-container">
                <Bars height={80} width={80} color="#4fa94d" ariaLabel="bars-loading" />
            </div>
        </div>
    );
};

export default CustomLoader;