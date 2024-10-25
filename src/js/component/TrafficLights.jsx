import React, { useEffect, useState } from "react";




const TrafficLights = () => {

    const [activeLight, setActiveLight] = useState("rgb(0, 71, 14)");
    const colors = ["rgb(0, 71, 14)", "rgb(105, 100, 1)", "rgb(105, 1, 1)"]
    let index = 0

    useEffect(() => {
        console.log("useEffect");

        const intervalId = setInterval(() => {

            index = (index + 1) % colors.length;
            setActiveLight(colors[index]);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);





    return (
        <div className="wrap">

            <div className="box">
                <div
                    className={`RedLight ${activeLight === "rgb(105, 1, 1)" ? "selectedRed" : ""}`}
                    onClick={() => {
                        setActiveLight("rgb(105, 1, 1)");
                    }}
                ></div>
                <div
                    className={`YellowLight ${activeLight === "rgb(105, 100, 1)" ? "selectedYellow" : ""}`}
                    onClick={() => {
                        setActiveLight("rgb(105, 100, 1)");
                    }}
                ></div>
                <div
                    className={`GreenLight ${activeLight === "rgb(0, 71, 14)" ? "selectedGreen" : ""}`}
                    onClick={() => {
                        setActiveLight("rgb(0, 71, 14)");
                    }}

                >

                </div>



            </div>
            <div className="poste"></div>
        </div>



    )
}
export default TrafficLights;