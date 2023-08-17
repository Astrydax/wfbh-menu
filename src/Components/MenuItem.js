import React from 'react';

function MenuItem({itemData, mirrored}) {

    //todo: this is really gross fix it or kill it with fire

    const name =  <h3 className={"item-name column lato"}>{itemData.name}</h3>;
    const price = <p className={"column item-price"}>{itemData.price}</p>;
    const description = <p className={"item-description column"}>{itemData.description}</p>;
    const image = <img src={itemData.image} alt=""/>;

    return (
        <div>
            <div className={"row"}>
                {!mirrored ? price : name}
                {!mirrored ? name : price}
            </div>
            <div className={"item-details row"}>
                {!mirrored ? description : image}
                {!mirrored ? image : description}
            </div>
        </div>
    );
}

export default MenuItem;