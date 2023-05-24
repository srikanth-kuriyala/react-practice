import React from "react";
import "./list.css";
import products from "../products.json";

function List() {
    return (
        <div>
            <h4>Product List</h4>
            <ul className="list">
                {products && products.map((item, index) => 
                    <li key={index}>
                        <img src={item.image} />
                        <div>{item.name}</div>
                        <div>{item.currency} {item.price}</div>
                    </li>
                )
                }
            </ul>
        </div>
    )
}
export default List;