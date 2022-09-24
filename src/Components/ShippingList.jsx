import React from 'react'
import { useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items, setItems] = useState([]);
    const addToList = (item) => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);
    };
    return (
        <div>
            <ShippingForm addToListCallback={(value) =>
                addToList(value)} />
            <h1><center>Shipping-List</center></h1>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Color</th>
                    <th>Place</th>
                    <th>Weight</th>
                </thead>
                <tbody className='bdy'>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.title}>
                                    <td>{item.item}</td>
                                    <td>{item.itemNum}</td>
                                    <td>
                                        <div style={{ backgroundColor: item.itemcolor, width: "60px", height: "30px" }}></div>
                                    </td>
                                    <td>{item.itemPlace}</td>
                                    <td>{item.itemWeight}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShippingList