/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
  background-color:${Colors.lighter};
`;

const Body = Styled.View`
  color:${Colors.white};
  `;

const SectionContainer = Styled.Text`
  margin-top: 32px;
  padding-horizontal:24px;
`;

const SectionDescription = Styled.Text`
margin-top: 8px;
font-size: 18px;
font-weight: 400;
color:${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight:700;
`;

interface Props {}

const App = ({}: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> Good
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>See you 1</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>

            <SectionContainer>
              <SectionDescription>See you 2</SectionDescription>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>

            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
