import React from 'react'
import styled from 'styled-components'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from "react-native-easy-grid"

const Wrapper = styled.View`
  display: flex;
  flex:1;
  align-items: center;
`

const NumberWrapper = styled.Text`
  display: flex;
  flex:1;
  font-size: ${sizeNormalize(20)};
  color: ${Constants.numberColor};
`

export const NumberDisplay = ({numbersOutput}) => {
  return (
    <Grid>
      <Row size={20}/>
      <Row size={60}>
        <Col size={10}/>
        <Col size={80}>
          <Wrapper>
            <NumberWrapper>
              {numbersOutput}
            </NumberWrapper>
          </Wrapper>
        </Col>
        <Col size={10}/>
      </Row>
      <Row size={20}/>
    </Grid>
  )
}

export default NumberDisplay
