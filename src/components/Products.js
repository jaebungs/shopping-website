import React from 'react';
import chair from '../../images/chair.jpg';
import keyboard from '../../images/keyboard.jpg';
import lamp from '../../images/lamp.jpg';
import mouse from '../../images/mouse.jpg';
import set1 from '../../images/set1.jpg';

export const ProductsList = [
    {
        id: 0,
        img: chair,
        name: 'Chair',
        price: '69',
        quantity: 1
    },
    {
        id: 1,
        img: keyboard,
        name: 'Keyboard',
        price: '20',
        quantity: 1
    },
    {
        id: 2,
        img: mouse,
        name: 'Mouse',
        price: '18',
        quantity: 1
    },
    {
        id: 3,
        img: set1,
        name: 'Set1',
        price: '1399',
        quantity: 1
    },
    {
        id: 4,
        img: lamp,
        name: 'Lamp',
        price: '39',
        quantity: 1
    },
]

export const ProductsTemplate = () => (
    <div>
        {
            ProductsList.map((product) => (
                <div 
                    className="productPage-container"
                    key={product.id}
                >
                    <img 
                        src={product.img}
                        alt={product.img + " img"}
                        className="image-products"
                    />
                    <h5>{product.name}</h5>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </div>
            ))
        }
    </div>
)