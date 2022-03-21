import React from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { Container, IconStyled, ImageLogo, TouchableGoBack, TouchableMenu } from './styles'
import { View } from 'react-native'

export const Header = ({ navigation, back }: StackHeaderProps) => {
  const theme = useTheme()
  return (
    <Container
      style={{
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        {back ? (
          <TouchableGoBack onPress={() => navigation.goBack()}>
            <IconStyled name='chevron-left' size={RFValue(24)} color={theme.COLORS.DARK} />
          </TouchableGoBack>
        ) : null}
        <ImageLogo source={require('../../../assets/logo-small.png')} />
      </View>
      <TouchableMenu>
        <IconStyled name='menu' size={RFValue(24)} color={theme.COLORS.BACKGROUND} />
      </TouchableMenu>
    </Container>
  )
}
