import React from "react";
import "../App.css";


export const ProductList = () => {
    const nav = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Products",
            url: "/"
        },
        {
            name: "About",
            url: "/"
        },
        {
            name: "Contact",
            url: "/"
        }
    ]

    const productList = [
        {
            productID: 101,
            productName: "Wireless Mouse",
            category: "Electronics",
            price: "$25.99"
        },
        {
            productID: 102,
            productName: "Bluetooth Headphones",
            category: "Electronics",
            price: "$49.99"
        },
        {
            productID: 103,
            productName: "Desk Chair",
            category: "Furniture",
            price: "$89.99"
        },
        {
            productID: 104,
            productName: "Water Bottle",
            category: "Accessories",
            price: "$12.50"
        }
    ]
    return (
        <>
            <div className="container">
                <div className="header">
                    <div><h1>Product Store</h1></div>
                    <div className="nav">
                        {nav.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li className="li">{item.name}</li>
                                </ul>
                            )
                        })}

                    </div>

                </div>
                <div className="main">
                    <h2>Product List</h2>
                    <div>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productList.map((item, index) => {
                                        return (
                                            <tr className="bgLi" key={index}>
                                                <td>{item.productID}</td>
                                                <td>{item.productName}</td>
                                                <td>{item.category}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        )

                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="footer">
                    <p>&copy;2024 Product Store.All rights reserved.</p>
                </div>
            </div>
        </>
    )
}