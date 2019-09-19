import React from 'react'
import styled from 'styled-components'
import Constants from '../utils/constants'
import { Col, Row, Grid } from "react-native-easy-grid";
import DisplayNumber from '../redux/containers/display/numberDisplay'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.colorText};
	text-align: center;
`;

const Display = () => (
  <Grid>
    <Row size={10}>
      <Col size={25}>
        <Wrapper backgroundColor="white"/>
      </Col>
      <Col size={50}>
        <Wrapper backgroundColor="grey"/>
      </Col>
      <Col size={25}>
        <Wrapper backgroundColor="white"/>
      </Col>
    </Row>
    <Row size={32}>
      <Wrapper backgroundColor="white"/>
    </Row>
    <Row size={38}>
      <Col size={1}>
        <Row size={1}>
          <Wrapper backgroundColor="green"/>
        </Row>
        <Row size={1}>
          <Wrapper backgroundColor="red"/>
        </Row>
        <Row size={1}>
          <Wrapper backgroundColor="blue"/>
        </Row>
        <Row size={1}>
          <Wrapper backgroundColor="yellow"/>
        </Row>
      </Col>
      <Col size={1}>
      <Row size={1}>
        <Wrapper backgroundColor="yellow"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="red"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="blue"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="green"/>
      </Row>
      </Col>
      <Col size={1}>
      <Row size={1}>
        <Wrapper backgroundColor="green"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="yellow"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="blue"/>
      </Row>
      <Row size={1}>
        <Wrapper backgroundColor="green"/>
      </Row>
      </Col>
    </Row>
    <Row size={10}>
      <Wrapper backgroundColor="grey"/>
    </Row>
  </Grid>
)

export default Display
