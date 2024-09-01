import { createActions, handleActions } from "redux-actions";

const initialState = {}; // 초기값

// 액션 목록
export const LOGIN = 'user/LOGIN';
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';

export const { user: { login, resetLoginUser } } = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res }),
});

// 리듀서
const userReducer = handleActions({
    [LOGIN]: (state, { payload: { res } }) => {

        if (res) {
            /* localStorage에 로그인 상태 저장 */
            localStorage.setItem("isLogin", true);
        } else {
            res = { message: 'LOGIN_FAIL' };
        }

        return res;

    },
    [RESET_LOGIN_USER]: (state, { payload: { res } }) => {

        return res;

    }
}, initialState
);

export default userReducer;
