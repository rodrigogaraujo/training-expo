import React from 'react'
import { useTheme } from 'styled-components'
import { Linking } from 'react-native'
import { Container, ImageLogo, FooterText, ButtonLinking, ButtonLinkingText } from './styles'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Container>
      <ImageLogo source={require('../../assets/logo-white.png')} />
      <FooterText>
        O Coursify.me é uma plataforma de ensino a distância,onde qualquer pessoa ou empresa pode
        construir seuEAD e vender cursos pela internet.
      </FooterText>
      <ButtonLinking onPress={() => Linking.openURL('https://coursify.me/')}>
        <ButtonLinkingText>Quero conhecer a plataforma!</ButtonLinkingText>
      </ButtonLinking>
    </Container>
  )
}
