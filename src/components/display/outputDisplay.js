import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from "react-native-easy-grid"

const Wrapper = styled.View`
  display: flex;
  flexDirection: row;
  alignSelf: center;
`

const NumberWrapper = styled.View`
  display: flex;
  alignItems: center;
`

const Number = styled.Text`
  display: flex;
  font-size: ${sizeNormalize(100)};
  color: ${Constants.numberColor};
`

const DecimalWrapper = styled.View`
  display: flex;
  alignItems: flex-start;
`

const Decimal = styled.Text`
  display: flex;
  justifyContent: flex-start;
  font-size: ${sizeNormalize(40)};
  color: ${Constants.euroIconColor};
`

const EuroWrapper = styled.View`
  display: flex;
  alignItems: flex-end;
`

const Euro = styled.Text`
  display: flex;
  textAlign: right;
  fontWeight: bold;
  font-size: ${sizeNormalize(60)};
  color: ${Constants.euroIconColor};
`

export const NumberDisplay = ({numbersOutput, numbersDecimal}) => {
  return (
    <Grid>
      <Row size={20}/>
      <Row size={60}>
        <Col size={10}/>
        <Col size={75}>
          <Wrapper>
            <EuroWrapper>
              <Row size={10}/>
              <Row size={70}>
                <Euro>
                  €
                </Euro>
              </Row>
              <Row size={20}/>
            </EuroWrapper>
            <NumberWrapper>
              <Number numberOfLines={1} ellipsizeMode="clip">
                {numbersOutput}
              </Number>
            </NumberWrapper>
            <DecimalWrapper>
              <Row size={15}/>
              <Row size={65}>
                <Decimal numberOfLines={1}>
                {numbersDecimal}
                </Decimal>
              </Row>
              <Row size={20}/>
            </DecimalWrapper>
          </Wrapper>
        </Col>
        <Col size={15}/>
      </Row>
      <Row size={20}/>
    </Grid>
  )
}

export default NumberDisplay
