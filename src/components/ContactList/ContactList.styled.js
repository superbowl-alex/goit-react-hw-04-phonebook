import styled from '@emotion/styled';

export const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;
