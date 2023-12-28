import styled from 'styled-components';

export const StyledHomediv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.div`
  background: rgba(30, 30, 30, 0.2);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(103, 74, 74, 0.33);
  width: 75%;
  text-align: center;

  h2 {
    font-size: 60px;
    color: #fff;
    margin: 0;
  }
`;