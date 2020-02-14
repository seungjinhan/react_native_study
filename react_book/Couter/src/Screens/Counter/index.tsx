import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex:1;
'`;

const TitleContainer = Styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const TitleLabel = Styled.Text`
    font-size:24px;
`;

const CountCounter = Styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
`;

const CountLabel = Styled.Text`
    font-size:24px;
    font-weight:bold;
`;

const ButtonContainer = Styled.View`
    flex:1;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
`;

interface Props {
  title?: string;
  initValue: number;
}

interface State {
  count: number;
  error: Boolean;
}

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('consturctor');

    this.state = {
      count: props.initValue,
      error: false,
    };
  }

  render() {
    console.log('rennder');

    const {title} = this.props;
    const {count, error} = this.state;

    return (
      <Container>
        {!error && (
          <>
            {title && (
              <TitleContainer>
                <TitleLabel>{title}</TitleLabel>
              </TitleContainer>
            )}
            <CountCounter>
              <CountLabel>{count}</CountLabel>
            </CountCounter>
            <ButtonContainer>
              <Button
                iconName="plus"
                onPress={() => this.setState({count: count + 1})}
              />
              <Button
                iconName="minus"
                onPress={() => this.setState({count: count - 1})}
              />
            </ButtonContainer>
          </>
        )}
      </Container>
    );
  }

  // 부모로부터 받은 Props와 State를 동기화 할때 사용/
  // 부모로 부터 받은 Props로 State에 값을 설정하거나, Props에 의존하여 State값을 결정하고자 할때 사용.
  // 컴포넌트가 생성될때 한번 호출 - Props와 State를 동기화 해야 하므로 Props가 변경될때마나 호출
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  // 클래스 컴포넌트가 처음으로 화면에 표시된 이후, 이 함수가 호출
  // 즉, render 함수가 처음 한번 호출된 후, componentDidMount함수가 호출
  // 이 함수는 컴포넌트가 화면에 처음 표시된 후 , 한번만 호출되므로 ajax를 통해 데이터를 습득하거나 다른 자바스크립트 라이브러리와의 연동을 수행
  // 부모로 부터 받은 Props값이 변경되어도 this.setState로 값이 변경되어도 다시 호출되지 않은다
  // 따라서 render 함수와는 다르게 이 함수에 this.setState를 직접 호출 할 수 있으며,
  // ajax를 통해 받은 데이터를 this.setState를 사용하여 State에 설정하기 적합
  componenntDidMount() {
    console.log('componenntDidMount');
  }

  // 클래스 컴포넌트는 기본적으로 부모로부터 받은 Props가 변경되거나, this.setState로 State를 변경하면
  // 리렌더링되어 화면을 다시 그리게 된다
  // Props또는 State의 값이 변경되었지만, 다시 화면을 그리고 싶지 않은 경우 이 함수를 사용하여 렌더링을 제어.
  // 이 함수에서 false를 반환하면 화면을 다시 그리는 리렌더링을 막을 수 있다.
  // 이렇게 리렌더링을 방지하는 이유는 화면 렌더링을 최적화하기 위해서
  // 화면을 다시 그리는 리렌더링이 리액트 컴포넌트에서 가장 비용이 많이 드는 부분이다.
  // 따라서 데이터를 비교하고 불필요한 리렌더링을 방지
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    return true;
  }

  // Props, State가 변경되어 화면을 다시 그리기 위해 render함수가 호출된 후,
  // 실제 화면이 갱신되기 바로 직전에 이 함수가 호출
  // 이 함수에서 반환하는 값은 componentDidUpdate의 세번째 매개변수로 전달
  // 화면을 갱신하는 동안 수동으로 스크롤 위치를 고정하는 경우에 사용.
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    return {testData: true};
  }

  // componentDidMount 컴포넌트가 처음 화면에 표시된 후 실행되고 두번 다시 호출되지 않는 함수
  // componentDidUpdate 컴포넌트가 처음 화면에 포시될때는 실행되지 않지만,
  // Props/State 가 변경되어 화면이 갱신될때 마다 render함수 호출 이후에 호출
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: ISnapshot) {
    console.log('componentDidUpdate');
  }

  // 해당 컴포넌트가 화면에서 완전히 사라진 후에 호출
  // componentdidMount에서 연동한 자바스크립트 라이브러리를 해지하거나
  // setTimeout, setInterval등의 타이머를 clearTimeout, clearInterval을 사용하여 해제할때 사용
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 컴포넌트의 렌더링 도중 에러가 발생하면 앱이 비정상 종료된다, 이때 렌더링에서 예외처리
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({error: true});
  }

  // 호출순서
  // 컴포넌트가 생성 : constructor - getDerivedStateFromProps - render - componentDidMount
  // 컴포넌트의 Props가 변경: getDerivedStateFromProps - shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate
  // 컴포넌트 State 변경 : shouldComponentUpdate - render - getSnapshotBeforeUpdate - componentDidUpdate - componentDidUpdate
  // 컴포넌으 렌더링 도중 에러: componentDidCatch
  // 컴포넌트가 제거: componentWillUnmount
}
