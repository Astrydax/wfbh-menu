import React, {useState} from 'react';

function ScreenSelector({setScreenNumber}) {
    const [opened, setOpened] = useState(true);
    const handleChangeScreen = (e) => {
        setScreenNumber(e.target.value)
    }


    return (
        <div>
            {opened &&
                (<div id={"screen-selector"}>
                    <button type={"button"} id={"close-item-adder-btn"}
                            onClick={() => setOpened(false)}>X
                    </button>
                    <h3> Select screen #</h3>
                    <select className={"input"} onChange={handleChangeScreen} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                </div>)}

        </div>

    );
}

export default ScreenSelector;