import UserManage from './pages/UserManage'
import Login from './pages/Login'
import Tools from './pages/Tools'
import { Route, Routes } from "react-router-dom"
import { Layout, theme } from 'antd';
import TopHeader from './component/TopHeader';
import SideMenu from './component/SideMenu';
import './App.css'

function App() {
  const { Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <Layout style={{
        height: '100%'
      }}>
        <SideMenu />
        <Layout>
          <TopHeader />
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, overflow: 'auto', background: colorBgContainer, }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/usermanage" element={<UserManage />} />
              <Route path="/test" element={<UserManage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
export default App
