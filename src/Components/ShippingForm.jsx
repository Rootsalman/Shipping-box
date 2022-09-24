import React, { useState } from 'react'

function ShippingForm(props) {
    const [title, setTitle] = useState("");
    const [number, setNum] = useState("");
    const [Color, setColor] = useState("");
    const [Place, setPlace] = useState("");
    const [Weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('its running');

        const data = {
            item: title,
            itemNum: number,
            itemcolor: Color,
            itemPlace: Place,
            itemWeight: Weight,
        }
       props.addToListCallback(data);
    }
    return (
        <div className="App">
            <h1>ShippingForm </h1>
            <form className='myfr' onSubmit={handleSubmit}>
                <input type="text" name="value" value={title} placeholder='ITEM-NAME' onChange={(e) =>
                    setTitle(e.target.value)} />
                <br></br>
                <input type="number" value={number} placeholder='Phone' onChange={(e) =>
                    setNum(e.target.value)} />
                <br></br>
                <label>ITEM COLOR</label><br></br>
                <input type="color" value={Color} placeholder='color' onChange={(e) =>
                    setColor(e.target.value)} />
                <br></br>
                <input type="text" value={Place} placeholder="PLACE" onChange={(e) =>
                    setPlace(e.target.value)
                } /><br></br>
                 <input type="text" value={Weight} placeholder="Weight" onChange={(e) =>
                    setWeight(e.target.value)
                } /><br></br>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default ShippingForm