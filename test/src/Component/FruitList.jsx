import React, { useState } from "react";
import FruitAndVegitable from "./FruitAndVegitable";
function FruitList() {
    const initialData = [
        {name: "Apple", Price: "$8", type: "Fruit"},
        {name: "Banana", Price:"$3", type: "Fruit"},
        {name: "Orange", Price: "$6", type: "Fruit"}, 
        {name: "Dragonfruit", Price: "$10", type: "Fruit"},
        {name: "Cabbage", Price: "$1", type: "Vegitable"},
        {name: "Kale", Price: "$8", type: "Vegitable"},
        {name: "Carrot", Price: "$8", type: "Vegitable"},
        {name: "Spinach", Price: "$8", type: "Vegitable"}
    ];
    const [FruitList, setFruitList] = useState(initialData);
    return (
        <div>
            <h2> Fruit List</h2>
            <FruitAndVegitable items={FruitList}/>
        </div>
    );
    }
    export default FruitList