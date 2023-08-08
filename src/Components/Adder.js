import React from 'react';
import { useState } from 'react';

function Adder({data}) {
    return (
        <div className={"adder"}>
            <form>
                <h2>
                    Add new item
                </h2>
                <div className="input-group">
                    <input type="text" placeholder={"Choose a catagory"}/>
                </div>
            </form>
        </div>
    );
}

export default Adder;