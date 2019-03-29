import React from 'react';
import './index.less';
import { Collapse } from 'antd';


const Panel = Collapse.Panel;

const customPanelStyle = {
    background: '#f0f2f5',
    borderRadius: 6,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

export default class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeGallery() {
        document.querySelector('#show-picture').style.display = 'none';
    }
    render() {
        return (
            <div className="animated ani-box notes-wrap">
                <Collapse bordered={false} defaultActiveKey={['6']}>
                    {/* <Panel header="JS执行栈" key="1" style={customPanelStyle}>
                        <Note1 />
                    </Panel>
                    <Panel header="JS事件循环" key="2" style={customPanelStyle}>
                        <Note2 />
                    </Panel>
                    <Panel header="JS值类型" key="3" style={customPanelStyle}>
                        <Note3 />
                    </Panel>
                    <Panel header="JS类型转换" key="4" style={customPanelStyle}>
                        <Note4 />
                    </Panel>
                    <Panel header="== vs ===, typeof vs instanceof" key="5" style={customPanelStyle}>
                        <Note5 />
                    </Panel>


                    <Panel header="详解This" key="6" style={customPanelStyle}>
                        <Note6 />
                    </Panel>
                    <Panel header="CommonJs、ES2015、AMD、CMD模块" key="15" style={customPanelStyle}>
                        <Note15 />
                    </Panel> */}
                </Collapse>

                <div id="show-picture" onClick={() => this.closeGallery()}>
                    {/* <img src="" alt="" onClick={(e) => (e.stopPropagation())} /> */}
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}
