import React, { Component } from 'react';
import { Input, Form, Card, Button } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { login, onChangeInput, checkFields } from '../../store/redux/actions';

const { Item } = Form;
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submit = e => {
    e.preventDefault();
    this.props.checkFields();
  };

  render() {
    const { onChangeInput } = this.props;
    const { fieldsOk } = this.props.loginData;
    console.log(`fieldsOK:${fieldsOk}`);

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Card style={{ width: '400px', height: '200px' }}>
          <Form onSubmit={this.submit}>
            <Item>
              <Input
                placeholder="Usuário"
                onChange={e => onChangeInput({ user: e.target.value })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Senha"
                type="password"
                onChange={e => onChangeInput({ password: e.target.value })}
              />
            </Item>
            <Item>
              <Button htmlType="submit">Login</Button>
            </Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loginData: state });

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  onChangeInput: data => dispatch(onChangeInput(data)),
  checkFields: () => dispatch(checkFields())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
