import { Navigate } from 'react-router-dom';
import MenuModifyForm from '../components/form/MenuModifyForm';

function MenuModify() {

    const loginStatus = !!localStorage.getItem('isLogin'); // 로그인 상태가 아니면 메인으로 이동

    if (!loginStatus) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <>
            <h1>메뉴 수정 페이지</h1>
            <MenuModifyForm />
        </>
    );
}

export default MenuModify;
