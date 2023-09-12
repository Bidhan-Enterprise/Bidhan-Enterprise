import React from 'react';
import Rehal from "../../../../public/img/rehal.jpg"
import LbCornerShelf from "../../../../public/img/LbCornerShelf.jpg"
import ROUTERSTAND from "../../../../public/img/ROUTERSTAND.jpg"

const Product = () => {
    const products = [
        {
            "id":1,
        "name":"HDC-378 (Wooden Rehal)",
        "price":4400,
        "image":Rehal
    },
        {
            "id":2,
        "name":"LB Corner Shelf ( Black/ White)",
        "price":1200,
        "image":LbCornerShelf
    },
        {
            "id":3,
        "name":"ROUTER STAND",
        "price":690,
        "image":ROUTERSTAND
    }
]
    return (
        <div>
            <h1>product</h1>
            {
                products.map(product =>
                <div key={product.id}>
                    <img className='w-[280px] h-[280px]' src={product.image} alt="" />
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                </div>
                )
            }
        </div>
    );
};

export default Product;