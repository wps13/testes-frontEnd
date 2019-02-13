import React, { Component } from "react";
import { Button } from "antd";
import "./Style.scss";
import ModalRegister from "../../ModalRegister/Index";

export default class CollapseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };
  }

  changeModality = state => this.setState({ visibility: state });

  render() {
    let { name, visibility } = this.props;
    return (
      <div className="div-collapse">
        <p>Group {name}</p>
        <p>Product name</p>
        <Button
          type="primary"
          style={{ borderRadius: "50px" }}
          onClick={() => this.changeModality(true)}
        >
          + Item
        </Button>
        {visibility && (
          <ModalRegister
            visibility={visibility}
            changeModality={this.changeModality}
          />
        )}
      </div>
    );
  }
}
