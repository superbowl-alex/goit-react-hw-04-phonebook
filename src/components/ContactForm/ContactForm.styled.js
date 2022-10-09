import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormAddContacts = styled(Form)`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.large};
  border: ${p => p.theme.borders.wide};
  border-color: ${p => p.theme.colors.chestnut};
  background-color: ${p => p.theme.colors.lavender};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;
`;

export const Input = styled(Field)`
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

export const Thumb = styled.div`
  position: relative;
`;

export const ErrorElement = styled.div`
  position: absolute;
  bottom: 0px;
  left: -235px;
  font-size: ${p => p.theme.fontSizes.xs};
  width: 200px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.lavender};
  border-radius: ${p => p.theme.radii.large};
`;

export const ButtonForm = styled.button`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.chestnut};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.large};
  transition: transform 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.shadows.middle};
  }
`;
