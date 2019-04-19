import React, { Component } from "react";
import Button from "../../components/Button";
import Box from "../../components/Box";
import FormItem from "../../components/FormItem";
import OuterBox from "../../components/OuterBox";

class FormSimulation extends Component {
  render() {
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
            <input type="text" />
          </FormItem>
          <FormItem>
            <span>Mensalidade:</span>
            <input type="number" />
          </FormItem>
          <FormItem>
            <span>Tempo:</span>
            <select>
              <option>1 ano</option>
              <option>2 anos</option>
              <option>3 anos</option>
            </select>
          </FormItem>
          <Button>Simular</Button>
        </Box>
      </OuterBox>
    );
  }
}

export default FormSimulation;
