import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.blue};
`;

export const WrapForms = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.large};
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.lightBlue};
`;

export const WrapList = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.large};
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.lightBlue};
`;

export const FormTitle = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xxxl};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.wide};
  color: ${p => p.theme.colors.deepBlue};
`;

export const ListTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.wide};
  color: ${p => p.theme.colors.deepBlue};
`;
