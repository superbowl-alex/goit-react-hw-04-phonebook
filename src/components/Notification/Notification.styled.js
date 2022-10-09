import styled from '@emotion/styled';

export const Alert = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.lavender};
  width: 100%;
`;
