import React from 'react';

function MenuItem({itemData}) {

    return (
        <div>
            <div className={"row"}>
                <h3 className={"item-name column"}>{itemData.name}</h3>
                <p className={"column item-price"}>{itemData.price}</p>
            </div>

            <div className={"item-details row"}>
                <p className={"item-description column"}>{itemData.description}</p>
                <img src={itemData.image} alt=""/>
            </div>

        </div>
    );
}

export default MenuItem;