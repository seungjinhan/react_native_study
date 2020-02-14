import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text``;

interface Props {}

const EmptyItem = ({}: Props) => {
  return (
    <Container>
      <Label>아래 + 버튼을 눌러서 새로운 일을 등록</Label>
    </Container>
  );
};

export default EmptyItem;
