import React from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, Icon, Switch, Layout,
} from 'antd';
import { connect } from 'react-redux';
import allMenu from './menu';
import Top from './header';
import Contents from './content';
import Footer from './bottom';
import './index.less';
import avatar from '../../images/avatar.jpeg';

const { SubMenu } = Menu;
const { Sider } = Layout;

@connect(
    (state) => ({
        router: state.router,
    })
)
export default class Container extends React.Component {
    state = {
        theme: 'dark',
        collapsed: false,
        mode: 'inline',
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }

    toggle = () => {
        const { collapsed } = this.state
        this.setState({
            collapsed: !collapsed,
            mode: collapsed ? 'inline' : 'vertical',
        })
    }

    render() {
        const {
            collapsed, theme, mode,
        } = this.state;
        const { router } = this.props;
        const selectedKey = router.location.pathname;

        let openKey = '';
        for (let menuObj of allMenu) {
            if (menuObj.children) {
                for (let menuList of menuObj.children) {
                    if (menuList.url === selectedKey) {
                        openKey = menuObj.url;
                        break;
                    }
                }
            }
        }
        // console.log(openKey, selectedKey)
        const AllMenu = allMenu.map((subMenu) => {
            if (subMenu.children && subMenu.children.length) {
                return (
                    <SubMenu key={subMenu.url}
                        title={
                            <span>
                                <Icon type={subMenu.icon} />
                                <span>{subMenu.name}</span>
                            </span>
                        }
                    >
                        {
                            subMenu.children.map(menu => (
                                <Menu.Item key={menu.url}>
                                    <Link to={`${menu.url}`}>{menu.name}</Link>
                                </Menu.Item>
                            ))
                        }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                        <Icon type={subMenu.icon} />
                        <span className="nav-text">{subMenu.name}</span>
                    </Link>
                </Menu.Item>
            )
        })
        return (
            <Layout className="containAll">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    {/* {
                        theme === 'light' 
                        ? <Icon type="github" className="github" /> 
                        : <Icon type="github" className="github white" />
                    } */}
                    <img src={avatar} alt="" className="avatar" />
                    {
                        theme === 'light'
                            ? <span className="author">Alec</span>
                            : <span className="author white">Alec</span>
                    }
                    <Menu
                        theme={theme}
                        defaultOpenKeys={[openKey]}
                        selectedKeys={[selectedKey]}
                        className="menu"
                        mode={mode}
                    >
                        {AllMenu}
                    </Menu>
                    <div className="switch">
                        <Switch
                            checked={theme === 'dark'}
                            onChange={this.changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </div>
                </Sider>

                <Layout>
                    <Top toggle={this.toggle} collapsed={collapsed} />
                    <Contents />
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}
