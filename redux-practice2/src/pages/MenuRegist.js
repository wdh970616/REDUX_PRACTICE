
import { Navigate } from 'react-router-dom';
import MenuRegistForm from '../components/form/MenuRegistForm';

function MenuRegist() {

    const loginStatus = !!localStorage.getItem('isLogin'); // 로그인 상태가 아니면 메인으로 이동

    if (!loginStatus) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <>
            <h1>메뉴 등록 페이지</h1>
            <MenuRegistForm />
        </>
    );
}

export default MenuRegist;
