import styled from 'styled-components';
import { flexCenter } from 'styles/modules';

export const Styled = {
  Container: styled.li`
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  `,
  DisplayWrap: styled.div`
    ${flexCenter('row')}
    width: 100%;
  `,
  CheckBox: styled.input`
    margin: 10px 5px;
    width: 30px;
    height: 30px;
  `,
  TodoTitle: styled.span`
    font-size: 18px;
    font-weight: 400;
    width: 80%;
    margin: 10px 0px;
  `,
  ModifyWrap: styled.div`
    ${flexCenter('row')}
    width: 100%;
  `,
};
