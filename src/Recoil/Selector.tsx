import { selector } from "recoil";
import { counterState } from "./Atoms";

const doubledState = selector<number>({
    key: 'doubledState',
    get: ({get}) => {
        const count = get(counterState);
        return count * 2;
    }
});

export { doubledState }