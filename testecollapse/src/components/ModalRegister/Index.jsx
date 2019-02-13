import React, { Component } from "react";
import { Modal, Form, Input, Button } from "antd";

const { Item } = Form;
export default class ModalRegister extends Component {
  render() {
    let { visibily, changeModalVisibility } = this.props;
    return (
      <Modal visible={visibily} onCancel={() => changeModalVisibility(false)}>
        <Form>
          <Item label="Name">
            <Input />
          </Item>
          <Item label="Email">
            <Input type="email" />
          </Item>
          <Item label="Password">
            <Input type="password" />
          </Item>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal>
    );
  }
}
