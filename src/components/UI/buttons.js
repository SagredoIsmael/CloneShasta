import React from 'react'
import styled from 'styled-components'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from "react-native-easy-grid"

const Wrapper = styled.View`
  display: flex;
  flex:1;
  background-color: ${Constants.buttonColor};
  borderRadius: ${sizeNormalize(5)};
  justifyContent: center;
  alignItems: center;
`

const TitleText = styled.Text`
  display: flex;
  font-size: ${sizeNormalize(15) };
  color: ${Constants.primaryColor};
`

export const SimpleButton = ({text}) => {
  return (
    <Wrapper>
      <TitleText>
       {text}
      </TitleText>
    </Wrapper>
  )
}
