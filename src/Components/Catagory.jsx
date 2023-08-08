import React, {useState} from 'react';
import MenuItem from "./MenuItem";

function Catagory({catagoryData}) {

    return (
        <div>
            <h1 style={{textDecorationLine: "underline"}}>{catagoryData.title}</h1>
            {catagoryData.items.map((item) => (
                <MenuItem key={item.id} itemData={item}/>
            ))}
        </div>
    );
}

export default Catagory;