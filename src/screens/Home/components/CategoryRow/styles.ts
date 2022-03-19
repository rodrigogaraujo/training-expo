import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window')

export const Container = styled.View`
  width: ${RFValue(50) - width}px;
  width: ${width - 30}px;
  margin-top: 40px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleCategory = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-size: ${RFValue(17)}px;
  font-family: ${({theme}) => theme.FONTS.BOLD};
  text-align: left;
`;

export const TextSeeMore = styled.Text`
  color: ${({theme}) => theme.COLORS.DARK};
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  text-align: left;
`;

export const ButtonSeeMore =  styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const IconStyled = styled(Icon)``;

export const WrapperCategories = styled.View`

`;
