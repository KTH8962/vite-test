import { useDispatch, useSelector } from 'react-redux';
import { login, logout, toggleClass } from '../redux/reducer';
import { RootState } from '../redux';

function ReduxPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state:RootState) => state.auth.isLoggedIn);
    const isActive = useSelector((state:RootState)=> state.auth.isActive);

    return (
        <div>
            {isLoggedIn?
                (<div>로그인되었습니다.<button type='button' onClick={()=> dispatch(logout())}>로그아웃</button></div>):
                (<div>로그아웃되었습니다.<button type='button' onClick={()=> dispatch(login())}>로그인</button></div>)
            }
            <div className={`box ${isActive? 'active': ''}`}></div>
            <button type='button' onClick={()=>dispatch(toggleClass())}>클래스</button>
        </div>
    );
}

export default ReduxPage;