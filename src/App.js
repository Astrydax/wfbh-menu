import logo from './images/Banner-Logo.png';
import {v4 as uuidv4} from 'uuid'
import Catagory from "./Components/Catagory";
import Adder from "./Components/Adder";
import FileUploader from "./Components/FileUploader";
import React, {useState} from "react";
import Data from "./db.json";

/*TODO: add category creator
        add persitence just like from stroodle
        make it possible to close the setup window
        make a way to remove items from the list
        stylize and pretify
        add support for multiple screens  
 */

function App() {
    const [menuData, setMenuData] = useState(Data);

    const addItem = (newItem) => {
        newItem.id = uuidv4();
        setMenuData( current=> ({...current, items: [...current.items, newItem]}));
    }

  return (
    <div className="App">
        <FileUploader menuData={menuData} setMenuData={setMenuData}/>
        <Adder className="adder" data={menuData} handleAddItem={addItem}></Adder>
        <img id={"banner"} src={logo} alt=""/>
        <div id="main" className={"row"}>
            <div className="column"> boop</div>
            <div className="column">
                {menuData.categories.map((cat) => (
                    <Catagory key={cat.id} catagoryData={cat} menuData={menuData}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
