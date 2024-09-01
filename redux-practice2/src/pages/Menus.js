import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";

function Menus() {

    const loginStatus = !!localStorage.getItem('isLogin'); // 로그인 상태가 아니면 메인으로 이동

    const navigate = useNavigate();

    return (
        <div>
            <h1>메뉴 목록 {(loginStatus) && <button onClick={() => navigate(`/menu/regist`)}>메뉴 추가</button>} </h1>
            <MenuList />
        </div>
    );
}

export default Menus;
