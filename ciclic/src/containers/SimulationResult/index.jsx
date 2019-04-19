import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import Button from "../../components/Button";
import OuterBox from "../../components/OuterBox";

class SimulationResult extends Component {
  render() {
    const { futureValue = 0, formData } = this.props;
    if (formData === {} || formData === null) {
      return <Redirect to="/" />;
    }

    const { monthlyCharge = 0, name = null, period = 0 } = formData;
    return (
      <OuterBox>
        <p>{`Olá ${name}, juntando R$ ${monthlyCharge}, você terá R$ ${futureValue} em ${period} ano(s).`}</p>
        <Link exact to="/">
          <Button>Simular novamente</Button>
        </Link>
      </OuterBox>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(SimulationResult);
