import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from "react-native-easy-grid"

const Wrapper = styled.View`
  display: flex;
  flex:1;
  flexDirection: row;
  alignSelf: center;
  alignItems: center;
`

const DefaultWrapper = styled.View`
  display: flex;
`

const Number = styled.Text`
  display: flex;
  font-size: ${props => props.sizeFontNumber ? sizeNormalize(props.sizeFontNumber) : sizeNormalize(40) };
  color: ${props => props.color};
`

const Euro = styled.Text`
  display: flex;
  textAlign: right;
  fontWeight: bold;
  font-size: ${props => props.sizeFontNumber ? sizeNormalize(props.sizeFontNumber) : sizeNormalize(40) };
  color: ${Constants.euroIconColor};
`

export const NumberDisplay = ({numbersOutput, numbersDecimal, sizeFontNumber}) => {
  const number = parseInt(numbersOutput.toString().replace(/\./g,''),10).toLocaleString("de-DE")

  return (
    <Grid>
      <Row size={20}/>
      <Row size={60}>
        <Col size={10}/>
        <Col size={75}>
          <Wrapper>
            <DefaultWrapper>
              <Row size={10}/>
              <Row size={70}>
                <Euro sizeFontNumber={sizeFontNumber*0.6} >
                  €
                </Euro>
              </Row>
              <Row size={20}/>
            </DefaultWrapper>
            <DefaultWrapper>
              <Number sizeFontNumber={sizeFontNumber} numberOfLines={1} ellipsizeMode="clip" color={Constants.numberColor}>
                {number}
              </Number>
            </DefaultWrapper>
            <DefaultWrapper>
              <Row size={15}/>
              <Row size={65}>
                <Number sizeFontNumber={sizeFontNumber*0.4} numberOfLines={1} ellipsizeMode="clip" color={Constants.euroIconColor}>
                {numbersDecimal}
                </Number>
              </Row>
              <Row size={20}/>
            </DefaultWrapper>
          </Wrapper>
        </Col>
        <Col size={15}/>
      </Row>
      <Row size={20}/>
    </Grid>
  )
}

export default NumberDisplay
