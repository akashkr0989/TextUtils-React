import React from 'react';
import { useState } from 'react';


export default function MyButton() {

    function MyButton() {
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
        }


        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }




    return (
        <div>
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        </div>
    )
}
