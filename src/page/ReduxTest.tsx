import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { check, login, logout, textInput } from "../redux/reducer2";


function ReduxTest() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state:RootState) => state.test.isLoggedIn);
    const isCheck = useSelector((state:RootState) => state.test.isCheck);
    const typingValue  = useSelector((state:RootState) => state.test.textInput);

    const handleTypingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // 입력된 값
        dispatch(textInput(newValue)); // Redux 상태에도 업데이트
    };

    return (
        <div>
            {isLoggedIn?
                (<div>로그인되었습니다.<button type='button' onClick={()=> dispatch(logout())}>로그아웃</button></div>):
                (<div>로그아웃되었습니다.<button type='button' onClick={()=> dispatch(login())}>로그인</button></div>)
            }
            <div className={`box ${isCheck? 'active': ''}`}></div>
            <button type='button' onClick={()=>dispatch(check())}>check</button>
            <input type="text" value={typingValue} onChange={handleTypingChange} />
            {typingValue}
        </div>
    );
}

export default ReduxTest;