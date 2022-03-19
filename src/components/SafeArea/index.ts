import styled from 'styled-components/native'

export const SafeArea = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 21px 15px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;