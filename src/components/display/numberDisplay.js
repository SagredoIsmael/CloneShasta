import React from 'react'
import styled from 'styled-components'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from "react-native-easy-grid"

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex:1;
  align-items: center;
  borderColor:${Constants.borderNumberColor};
  borderBottomWidth:1;
  borderRightWidth:${props => props.borderRight ? 1 : 0 };
  borderLeftWidth:${props => props.borderLeft ? 1 : 0 };
`

const NumberWrapper = styled.Text`
  display: flex;
  flex:1;
  font-size: ${sizeNormalize(20)};
  color: ${Constants.numberColor};
`

export const NumberDisplay = ({number, borderRight, borderLeft, checkNumberDisplay}) => {
  return (
    <Grid>
      <Row size={20}/>
      <Row size={60}>
        <Col size={10}/>
        <Col size={80}>
          <Wrapper borderRight={borderRight? true: false} borderLeft={borderLeft? true: false} onPress={() => checkNumberDisplay(number)}>
            <NumberWrapper>
              {number}
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
