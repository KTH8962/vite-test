import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from '../Recoil/Atoms';
import { doubledState } from '../Recoil/Selector';

function RecoilPage() {
    const [counter, setCounter] = useRecoilState(counterState);
    const doublCounter = useRecoilValue(doubledState);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <div>
                counter:{counter}<br/>
                double:{doublCounter}<br/>
                <button type='button' onClick={increment}>증가</button>
                <button type='button' onClick={decrement}>감소</button>
            </div>
        </div>
    );
}

export default RecoilPage;