import styled from 'styled-components/native';

interface IProps {
  width?: string
  backgroundColor?: string
}

const Divider = styled.View<IProps>`
  height: 1px;
  width: ${({ width }) => width || '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#DADADA'};
  margin: 10px 0px;
`;

export default Divider;
