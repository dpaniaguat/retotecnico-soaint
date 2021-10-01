import { useState } from 'react';

export const useCouter = ( initialState = 1 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter( parseInt(counter) + 1 );
    }

    const decrement = () => {
        setCounter( parseInt(counter) - 1 );
    }

    return {
        counter,
        setCounter,
        increment,
        decrement,
        reset
    };

}
