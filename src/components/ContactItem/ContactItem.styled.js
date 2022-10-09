import styled from '@emotion/styled';

export const Item = styled.li`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.lavender};
  transition: transform 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: ${p => p.theme.shadows.middle};
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[3]}px;
  cursor: pointer;
  transition: transform 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    /* box-shadow: ${p => p.theme.shadows.middle}; */
  }

  & > svg {
    color: ${p => p.theme.colors.chestnut};
  }
`;
