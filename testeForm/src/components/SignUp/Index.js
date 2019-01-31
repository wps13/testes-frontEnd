import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, InputNumber, Button, Card } from 'antd';
import 'antd/dist/antd.css';
import { addUser } from '../../store/redux/actions';
const { Item } = Form;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleInput = (field, value) => this.setState({ [field]: value });
  submitForm = e => {
    e.preventDefault();
    let state = this.state;
    console.log(state);
    this.props.addUser(state);
  };
  render() {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <Card title="User registration" style={{ width: '300px' }}>
          <Form onSubmit={this.submitForm}>
            <Item label="Nome">
              <Input onChange={e => this.handleInput('nome', e.target.value)} />
            </Item>
            <Item label="Sobrenome">
              <Input onChange={e => this.handleInput('sobrenome', e.target.value)} />
            </Item>
            <Item label="Idade">
              <InputNumber onChange={e => this.handleInput('idade', e)} />
            </Item>
            <Item>
              <Button htmlType="submit">Submit</Button>
            </Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => ({ users: state });
const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
