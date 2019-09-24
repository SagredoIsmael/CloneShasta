import React from 'react'
import styled from 'styled-components'
import Constants, {actuatedNormalize} from '../../utils/constants'
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
  font-size: ${actuatedNormalize(25)};
  color: ${Constants.numberColor};
`

export const NumberDisplay = ({number, borderRight, borderLeft, setNumberFromDisplay}) => {
  return (
    <Grid>
      <Row size={20}/>
      <Row size={60}>
        <Col size={10}/>
        <Col size={80}>
          <Wrapper borderRight={ borderRight? true: false } borderLeft={ borderLeft? true: false }>
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
