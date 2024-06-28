import React from 'react';
import cartAtom from '../store/cart';
import { useRecoilValue, useSetRecoilState } from "recoil"
const Card = ({ name, desc, price, image, id }) => {
    const cartList = useSetRecoilState(cartAtom);
    // console.log(useRecoilValue(cartAtom))

    return (
        <div className="max-w-sm  overflow-hidden shadow-sm transform transition duration-500 hover:scale-105 shadow-white font-serif rounded-md w-[22.5vw]" >
            <img className="w-full p-2" src={image} alt={name} />
            <div className="px-3 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-white w-[100%]">{desc}</p>
                <p className=" font-bold text-xl mt-2 text-white font-sans">Rs {price}</p>

            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300" onClick={() => cartList((prevList) => [...prevList, {
                    id,
                    name,
                    price,
                    description: desc,
                    imageUrl: image,
                }])} >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
