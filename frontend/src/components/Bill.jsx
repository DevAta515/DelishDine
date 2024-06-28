import { useEffect, useState } from "react"
import axios from "axios"

function Bill({ name, price, time, date }) {

    return (
        <>
            <div className="relative bill-container bg-purple-100 p-4 md:p-6 rounded-lg shadow-xl w-[23%] max-w-sm">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-4 border-purple-100"></div>
                <div className="bill-item mb-4">
                    <label className="block font-bold text-purple-700">Name:</label>
                    <p className="text-purple-900 border-b-2 border-purple-300 w-full">{name}</p>
                </div>
                <div className="bill-item mb-4">
                    <label className="block font-bold text-purple-700">Price:</label>
                    <p className="text-purple-900 border-b-2 border-purple-300 w-full">{price}</p>
                </div>
                <div className="bill-item mb-4">
                    <label className="block font-bold text-purple-700">Date:</label>
                    <p className="text-purple-900 border-b-2 border-purple-300 w-full">{date}</p>
                </div>
                <div className="bill-item mb-4">
                    <label className="block font-bold text-purple-700">Time:</label>
                    <p className="text-purple-900 border-b-2 border-purple-300 w-full">{time}</p>
                </div>
            </div>
        </>
    )
}


export default Bill