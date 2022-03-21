import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

const {width} = Dimensions.get('window')

export const TitlePost = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  text-align: left;
  padding: 0 15px;
`;

export const ImagePost = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: ${width - 30}px;
  height: 225px;
  border-radius: 12px;
`

export const WrapperHeader = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 32px;
`;


export const ContentPost = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_TEXT};
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  text-align: left;
  padding: 0 15px;
  margin-top: ${RFValue(16)}px;
`;
