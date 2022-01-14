
import React from 'react';
 import Highlight from '@components/HighLight'
;

import { Card, Col, Row, Divider } from 'antd';

const Note10 = () => (
    <div>
        <h2>理解HTTPS</h2>
        <div className="note-wrap">
            <h3>SSL</h3>
            <h4>SSL（Secure Sockets Layer）直译过来是安全套接层。</h4>
            <p>HTTPS协议就是基于SSL层来实现的</p>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="网络通信的四层模型">
                        <h4>4—应用层:</h4>
                        <p>HTTP, FTP, Tenlnet, SMTP</p>
                        <h4>3—传输层:</h4>
                        <p>TCP, UDP</p>
                        <h4>2—网络层:</h4>
                        <p>IP, ARP, RARP, ICMP, IGMP</p>
                        <h4>1—网络接口层</h4>
                        <p>物理链路访问，光纤、WIFI、4G等</p>

                        <h4>HTTP协议建立在传输层协议之上,而HTTPS就是在两者（应用层和传输层）之间加入一个SSL层，称为加密传输协议。</h4>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="SSL具体功能">
                        <p>1）SSL在实际的数据传输开始前，通讯双方会进行身份认证，确保数据发送到正确的客户机和服务器。</p>
                        <p>2）SSL对传输的数据进行了加密，防止数据中途被窃取。</p>
                        <p>3）SSL对传输的数据进行了封装，用以维护数据的完整性，确保数据在传输过程中不被改变。</p>
                        <p>4）SSL对传输的数据进行了压缩</p>
                    </Card>
                </Col>
            </Row>
        </div>

        <Divider />


       
    </div >
)

export default Note10;
