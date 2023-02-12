import styled from 'styled-components';
import { flexCenter } from 'styles/modules';

export const Styled = {
  DisplayWrap: styled.div`
    ${flexCenter('row')}
    width: 100%;
  `,
  CheckBox: styled.input`
    margin: 10px 10px 10px 0px;
    width: 30px;
    height: 30px;
    accent-color: #565656;
  `,
  TodoTitle: styled.span`
    font-size: 18px;
    font-weight: 400;
    width: 80%;
    margin: 10px 0px;
  `,
};
