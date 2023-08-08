import React, {useState} from 'react';
import MenuItem from "./MenuItem";

function Catagory({catagoryData, menuData}) {

    return (
        <div>
            <h1 style={{textDecorationLine: "underline"}}>{catagoryData.title}</h1>
            {menuData.items.filter(item => item.category === catagoryData.title).map((item) => (

                <MenuItem key={item.id} itemData={item}/>
            ))}
        </div>
    );
}

export default Catagory;