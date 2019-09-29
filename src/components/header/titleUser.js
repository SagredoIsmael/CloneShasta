import React from "react"
import styled from 'styled-components'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from 'react-native-easy-grid'

const Wrapper = styled.View`
  display: flex;
  flex:1;
`

const TitleText = styled.Text`
  display: flex;
  flex:1;
  textAlign: center;
  font-size: ${props => props.fontSize ? sizeNormalize(props.fontSize) : sizeNormalize(15) };
  color: ${props => props.color};
`

export const TitleUser = ({}) => {
  return (
    <Wrapper>
      <Grid>
        <Row size={30}/>
        <Row size={70}>
          <Col size={20}/>
          <Col size={60}>
            <Row size={60}>
              <TitleText fontSize={15} color={Constants.numberColor}>
                Fondos
              </TitleText>
            </Row>
            <Row size={40}>
              <TitleText fontSize={10} color={Constants.euroIconColor}>
                1.117,82 €
              </TitleText>
            </Row>
          </Col>
          <Col size={20}/>
        </Row>
        <Row size={0}/>
      </Grid>
    </Wrapper>
  )
}


export default TitleUser
