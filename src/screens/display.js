import React from 'react'
import styled from 'styled-components'
import Constants from '../utils/constants'
import { Col, Row, Grid } from "react-native-easy-grid"
import DisplayNumber from '../redux/containers/display/numberDisplay'
import OutputDisplay from '../redux/containers/display/outputDisplay'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${Constants.primaryColor};
`

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.colorText};
	text-align: center;
`;

const Display = () => (
  <Wrapper>
    <Grid>
      <Row size={10}>
        <Col size={25}>
          <Wrapper backgroundColor="grey"/>
        </Col>
        <Col size={50}>
          <Wrapper backgroundColor="grey"/>
        </Col>
        <Col size={25}>
          <Wrapper backgroundColor="white"/>
        </Col>
      </Row>
      <Row size={34}>
        <OutputDisplay/>
      </Row>
      <Row size={40}>
        <Col size={1}>
          <Row size={1}>
            <DisplayNumber number="1" borderRight/>
          </Row>
          <Row size={1}>
            <DisplayNumber number="4" borderRight/>
          </Row>
          <Row size={1}>
            <DisplayNumber number="7" borderRight/>
          </Row>
          <Row size={1}>
            <DisplayNumber number="," borderRight/>
          </Row>
        </Col>
        <Col size={1}>
        <Row size={1}>
          <DisplayNumber number="2"/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="5"/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="8"/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="0"/>
        </Row>
        </Col>
        <Col size={1}>
        <Row size={1}>
          <DisplayNumber number="3" borderLeft/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="6" borderLeft/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="9" borderLeft/>
        </Row>
        <Row size={1}>
          <DisplayNumber number="<" borderLeft/>
        </Row>
        </Col>
      </Row>
      <Row size={16}>
        <Wrapper backgroundColor="grey"/>
      </Row>
    </Grid>
  </Wrapper>
)

export default Display
