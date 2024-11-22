import { useReducer, useState } from 'react';

type Action = {type: 'plus'} | {type: 'minus'};
const initNum:number = 100;
const reducer = (number: number, action: Action):number => {
    switch(action.type) {
        case 'plus' :
            return number + 1;
        case 'minus' :
            return number - 1;
        default :
            return number;
    }
}

function StatePage() {
    const [num, setNumber] = useState<number>(0);
    const countNum = () => {
        setNumber(num + 1);
    }

    const [count, dispatch] = useReducer(reducer, initNum);
    const pluseHandler = () => dispatch({type: 'plus'});
    const minusHandler = () => dispatch({type: 'minus'});
    return (
        <div>
            {num}
            <div>
                <button type='button' onClick={countNum}>클릭</button>
            </div>
            {count}
            <button type="button" onClick={pluseHandler}>plus</button>
            <button type="button" onClick={minusHandler}>minus</button>
        </div>
    );
}

export default StatePage;