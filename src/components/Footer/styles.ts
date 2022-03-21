import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window')

export const Container = styled.View`
  height: ${RFValue(222)}px;
  padding: 19px 0;
  align-items: center;
  width: ${width}px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const ImageLogo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${RFValue(169)}px;
  height: ${RFValue(40)}px;
`

export const FooterText = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  text-align: center;
  margin-top: 16px;
`;


export const ButtonLinking = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.ORANGE_TEXT};
  padding: 17px 14px;
  border-radius: 60px;
  margin-top: 32px;
`;

export const ButtonLinkingText = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  text-align: center;
`;
