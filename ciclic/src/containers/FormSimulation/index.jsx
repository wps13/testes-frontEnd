import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Redirect } from "react-router-dom";

import Button from "../../components/Button";
import Box from "../../components/Box";
import FormItem from "../../components/FormItem";
import OuterBox from "../../components/OuterBox";

import { onChangeData, simulationRequest } from "../../store/ducks/simulation";

class FormSimulation extends Component {
  sendsimulation = () => {
    const { simulationRequest, formData } = this.props;
    const { monthlyCharge, period } = formData;
    simulationRequest({ monthlyCharge, period });
  };
  render() {
    const { onChangeData, futureValue } = this.props;
    if (futureValue !== undefined) {
      return <Redirect to="/result" />;
    }

    return (
      <OuterBox>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px"
          }}
        >
          Ciclic
        </p>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Simulador</p>
        <Box>
          <FormItem>
            <span>Nome:</span>
            <input
              type="text"
              onChange={e => onChangeData({ name: e.target.value })}
            />
          </FormItem>
          <FormItem>
            <span>Mensalidade:</span>
            <input
              type="number"
              onChange={e => onChangeData({ monthlyCharge: e.target.value })}
            />
          </FormItem>
          <FormItem>
            <span>Tempo:</span>
            <select onChange={e => onChangeData({ period: e.target.value })}>
              <option value="1">1 ano</option>
              <option value="2">2 anos</option>
              <option value="3">3 anos</option>
            </select>
          </FormItem>
          <Button onClick={this.sendsimulation}>Simular</Button>
        </Box>
      </OuterBox>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onChangeData, simulationRequest }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSimulation);
