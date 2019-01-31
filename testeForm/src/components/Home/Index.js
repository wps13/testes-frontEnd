import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link to="/login" style={{ margin: '5%' }}>
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>{' '}
        </Link>
      </div>
    );
  }
}

export default Home;
