import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const TitleCategory = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  text-align: left;
`;