import React from 'react'
import styled from 'styled-components'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { SimpleButton } from '../UI/buttons'

const Wrapper = styled.View`
  display: flex;
  flex:1;
`

export const Footer = ({}) => {
  return (
    <Wrapper>
      <Grid>
        <Row size={30}/>
        <Row size={50}>
          <Col size={7}/>
          <Col size={40}>
            <SimpleButton text="Solicitar"/>
          </Col>
          <Col size={5}/>
          <Col size={40}>
            <SimpleButton text="Enviar"/>
          </Col>
          <Col size={7}/>
        </Row>
        <Row size={20}/>
      </Grid>
    </Wrapper>
  )
}

export default Footer
