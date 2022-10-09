import styled from '@emotion/styled';

export const WrapFilter = styled.div``;

export const Label = styled.label`
  width: 434px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.large};
  border: ${p => p.theme.borders.wide};
  border-color: ${p => p.theme.colors.chestnut};
  background-color: ${p => p.theme.colors.lavender};
`;

export const Input = styled.input`
  width: 350px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.large};
  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.blue};
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  outline: none;

  &:hover,
  &:focus {
    outline: 2px solid rgb(40, 70, 219);
  }
`;
