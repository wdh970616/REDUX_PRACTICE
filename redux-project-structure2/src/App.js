import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Login from './pages/Login';
import Error from './pages/Error';
import "./App.css";

/* 추가 설치해야 하는 패키지 목록
 * react-router-dom
 * redux
 * react-redux
 * redux-actions
 * redux-thunk
 * redux-logger
 * redux-devtools-extension 
 * 
 * 주의사항
 * redux-devtools-extension 사용하려면
 * redux -> 4.2.0 버전으로 다운그레이드가 필요함
 * 이때, redux 호환문제로 인해
 * react-redux -> 8.0.2 버전
 * redux-thunk -> 2.4.1 버전으로 바꿔줘야한다.
 * 
 * 설치후 package.json에서 버전 바꾼뒤 
 * 터미널에 'npm install -force'
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" >
            <Route index element={ <Menus/> }/>
            <Route path=":id" element={ <MenuDetail/> }/>
            <Route path="regist" element={ <MenuRegist/> }/>
            <Route path="modify" >
              <Route path=":id" element={ <MenuModify/> }/>
            </Route>
          </Route>
          <Route path="login" element={ <Login/> }/>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
