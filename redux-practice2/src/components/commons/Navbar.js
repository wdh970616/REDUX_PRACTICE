import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginStatus = !!localStorage.getItem('isLogin');

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/');
    };

    return (
        <div>
            <ul>
                <li><NavLink to='/'>메인으로</NavLink></li>
                <li><NavLink to='/menu'>메뉴보기</NavLink></li>
                {!loginStatus ? (
                    <li><NavLink to='/login'>로그인</NavLink></li>
                ) : (
                    <li onClick={logoutHandler}><a href="">로그아웃</a></li>
                )
                }
            </ul>
        </div>
    );
}

export default Navbar;
