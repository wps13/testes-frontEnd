import React, { Component } from 'react';
import { Input, Form, Card, Button } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { login } from '../../store/redux/actions';

const { Item } = Form;
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleInput = (field, value) => this.setState({ [field]: value });

  submit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
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
                onChange={e => this.handleInput('user', e.target.value)}
              />
            </Item>
            <Item>
              <Input
                placeholder="Senha"
                type="password"
                onChange={e => this.handleInput('password', e.target.value)}
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
  login: data => dispatch(login(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
