import styled from "styled-components";

const Container = styled.div<{
  mainPadding?: boolean;
}>`
  /* width: 100%; */
  margin: 0;
  box-sizing: border-box;
  ${({ mainPadding }) => mainPadding && `padding: 30px 40px`}
`;

const FlexContainer = styled(Container)<{
  centeredAlign?: boolean;
  centeredJusitify?: boolean;
  column?: boolean;
}>`
  display: flex;
  ${({ centeredAlign }) => centeredAlign && `align-items: center;`};
  ${({ centeredJusitify }) => centeredJusitify && `justify-content: center;`};
  ${({ column }) => column && `flex-direction: column;`};
`;

export { Container, FlexContainer };
