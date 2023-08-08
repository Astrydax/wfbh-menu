import logo from './images/Banner-Logo.png';
import Catagory from "./Components/Catagory";
import Adder from "./Components/Adder";
import React, {useState} from "react";
import Data from "./data.json";

function App() {
    const [menuData, setMenuData] = useState(Data);

  return (
    <div className="App">
        <Adder className="adder" data={menuData}></Adder>
        <img id={"banner"} src={logo} alt=""/>
        <div id="main" className={"row"}>
            <div className="column"> boop</div>
            <div className="column">
                {menuData.rightColumn.map((item) => (
                    <Catagory key={item.id} catagoryData={item}/>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
