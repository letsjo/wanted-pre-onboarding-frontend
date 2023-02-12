import styled from 'styled-components';
import { flexBox } from 'styles/modules';

export const Styled = {
  Container: styled.ul`
    ${flexBox({ dir: 'column', content: 'flex-start', items: 'center' })}
    width: 80%;
    height: 100%;
    margin-bottom: 30px;
    overflow: auto;
  `,
};
