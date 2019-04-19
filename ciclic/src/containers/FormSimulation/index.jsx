import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../../components/Button";
import Box from "../../components/Box";
import FormItem from "../../components/FormItem";
import OuterBox from "../../components/OuterBox";

import { onChangeData, simulationRequest } from "../../store/ducks/simulation";

class FormSimulation extends Component {
  render() {
    const { onChangeData, simulationRequest } = this.props;
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
              onChange={e => onChangeData({ montlyCharge: e.target.value })}
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
          <Button click={simulationRequest}>Simular</Button>
        </Box>
      </OuterBox>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onChangeData, simulationRequest }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(FormSimulation);
