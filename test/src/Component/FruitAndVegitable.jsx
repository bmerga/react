import React from "react";

function FruitAndVegitable({items}) {
    return <div>
        {items.map(items=>
        <p>
            <span>{items.name}</span>
            <span> {items.price}</span>
        </p>)}
    </div>
}

export default FruitAndVegitable