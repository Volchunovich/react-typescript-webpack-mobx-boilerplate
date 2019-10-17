import * as React from 'react';
import MainStyles, { DefaultText } from '../../shared/templates/main.template.styled';

class Dashboard extends React.Component {
  render() {

    const { FlexContainer, FlexItem } = MainStyles;

    return (
      <FlexContainer>
        <FlexItem>
          <DefaultText>
            What is Dead Cells?
          </DefaultText>
        </FlexItem>

        <FlexItem>
          <DefaultText>
            What is Dead Cells?
          </DefaultText>
        </FlexItem>

        <FlexItem>
          <DefaultText>
            What is Dead Cells?
          </DefaultText>
        </FlexItem>
      </FlexContainer>
    );
  }
}

export default Dashboard;
