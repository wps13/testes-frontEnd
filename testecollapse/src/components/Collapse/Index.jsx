import React, { Component } from "react";
import Collapse, { Panel } from "rc-collapse";
import { Card, Row, Col } from "antd";
import "rc-collapse/assets/index.css";
import CollapseItem from "./CollapseItem/Index";
import "./Style.scss";

class CollapseItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null
    };
  }

  onAccordionChange(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <Row type="flex" align="middle" justify="center">
        <Col xs={24} md={18} style={{ margin: "20px" }}>
          <Collapse
            onChange={this.onAccordionChange.bind(this)}
            activeKey={this.state.activeKey}
          >
            <Panel
              header={<CollapseItem name={1} />}
              showArrow={false}
              key="test"
            >
              <Card>Inside a card</Card>
            </Panel>
            <Panel
              header={<CollapseItem name={2} />}
              showArrow={false}
              key="test2"
            >
              <Card>Inside another card</Card>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    );
  }
}

export default CollapseItems;
