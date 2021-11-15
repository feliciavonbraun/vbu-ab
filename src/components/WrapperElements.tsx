import styled from "styled-components";

const Container = styled.div<{
  fullWidth?: boolean;
  mainPadding?: boolean;
}>`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  ${({ fullWidth }) => !fullWidth && `max-width: 2000px;`}
  ${({ mainPadding }) => mainPadding && `padding: 20px 40px`}
`;

const FlexContainer = styled(Container)<{
  centered?: boolean;
}>`
  display: flex;
  ${({ centered }) =>
    centered && `justify-content: center; align-items: center;`};
`;

export { Container, FlexContainer };
