import React from 'react'
import styled from 'styled-components'
import Constants from '../../utils/constants'
import {sizeNormalize} from '../../utils/adaptSizes'
import { Col, Row, Grid } from 'react-native-easy-grid'
import newIcon from '../../../assets/img/ic_new.png'

const Wrapper = styled.View`
  display: flex;
  flex:1;
`

const Avatar = styled.Image`
  display: flex;
  flex:1;
  resizeMode: contain;
  alignSelf: center;
`

export const IconMenuUser = ({}) => {
  return (
    <Wrapper>
      <Grid>
        <Row size={30}/>
        <Row size={60}>
          <Col size={20}/>
          <Col size={60}>
            <Avatar source={newIcon} />
          </Col>
          <Col size={20}/>
        </Row>
        <Row size={10}/>
      </Grid>
    </Wrapper>
  )
}

export default IconMenuUser
