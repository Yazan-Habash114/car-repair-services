import styled from "styled-components";

export const FormsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 768px;
  min-height: 480px;
  border-radius: 10px;
  background: ${(props) => props.theme.background};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 14px 10px rgba(0, 0, 0, 0.22);
`;
