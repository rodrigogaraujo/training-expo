import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(80)}px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  flex-direction: row;
  padding: ${getStatusBarHeight() + 14}px 17px 14px;
`;

export const ImageLogo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${RFValue(169)}px;
  height: ${RFValue(40)}px;
`

export const TouchableGoBack = styled.TouchableOpacity`
`;

export const IconStyled = styled(Icon)``;

export const TouchableMenu = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFValue(15)}px;
  justify-content: center;
  align-items: center;
`;
