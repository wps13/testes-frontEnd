import React, { Component } from "react";
import CollapseItems from "../../components/Collapse/Index";
import { Layout } from "antd";
import "./Style.scss";

const { Header, Footer, Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider style={{ height: "100vh", minWidth: "100px !important", width:'100px !important'}} />
          <Layout>
            <Header />
            <Content>
              <CollapseItems />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  }
}
