import React, {useEffect, useState} from "react";


function FileUploader({menuData, setMenuData}) {

    const [file, setFile] = useState()
    const [opened, setOpened] = useState(true)

    const handleChange = e => {
        const fileReader = new FileReader();
        if (!e.target.files[0].name.toLowerCase().endsWith(".json")) {
            alert("WRONG FILE TYPE.\nPlease upload a valid json file.")
        } else {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = e => {
                setMenuData(JSON.parse(e.target.result));
            };
        }
    };

    function handleDownload() {
        const json_data = menuData;
        const fileName = "WFBH-Menu-Savefile.json";
        const data = new Blob([JSON.stringify(json_data)], { type: "text/json" });
        const jsonURL = window.URL.createObjectURL(data);
        const link = document.createElement("a");
        document.body.appendChild(link);
        link.href = jsonURL;
        link.setAttribute("download", fileName);
        link.click();
        document.body.removeChild(link);


    }

    return (
        <div>
            {opened && (<div id="fileuploader">
                <button type={"button"} id={"close-item-adder-btn"}
                        onClick={() => setOpened(false)}>X
                </button>
                <form>
                    <h3>Save File Manager</h3>
                    <input type="file" onChange={handleChange}/>
                    <button onClick={handleDownload} >Download</button>
                </form>
            </div>)}

        </div>


    );
}

export default FileUploader;