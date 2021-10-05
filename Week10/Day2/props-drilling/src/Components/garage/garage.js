import React from 'react'
import cars from "./cars"
import motorcycles from "./motorcycles"
import "../..App.css"

export default function garage() {
    return (
        <div className="box">
            <h1>garage</h1>
            <cars />
            <motorcycles />
        </div>
    );
}