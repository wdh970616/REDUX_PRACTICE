import LoginForm from '../components/form/LoginForm';
import { Navigate } from 'react-router-dom';

function Login() {

    const loginStatus = !!localStorage.getItem('isLogin'); // 로그인 된 상태면 메인으로 이동

    if (loginStatus) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <LoginForm />
        </>
    );
}

export default Login;
