import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  width: 235px;
  margin-right: 38px;
  margin-top: 12px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  border-radius: 12px;
  margin-bottom: 14px;
`;

export const WrapperHeader = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const WrapperText = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
`;

export const TitlePost = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  text-align: left;
`;

export const ImagePost = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 235px;
  height: 103px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`
