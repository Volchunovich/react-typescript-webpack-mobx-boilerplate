import { observable, reaction } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Button from '../components/Button';
import withErrorBoundary from '../error-boundaries/components/template';
import { lazyInject } from '../utils/ioc.utils';
import { ExampleStore } from './store';
import Styled from './styled';

@observer
class ExamplePage extends Component {
  @lazyInject(ExampleStore)
  protected readonly store: ExampleStore;

  @observable buttonType?: 'primary' | 'light' = 'primary';

  @observable whoAreYou: string[] = ['Stranger?', 'Mage?', 'or .. React developer?'];

  componentDidMount(): void {
    reaction(
      () => this.onClickButtonHandler,
      () => {},
    );
  }

  private onClickButtonHandler = () => {
    this.store.setCount(this.store.counts + 1);

    switch (this.store.counts % 3) {
      case 0:
        this.buttonType = 'primary';
        break;
      case 1:
        this.buttonType = 'light';
        break;
      default:
        this.buttonType = undefined;
        break;
    }
  };

  render() {
    const { FlexContainer, FlexItem, P } = Styled;
    const { counts } = this.store;

    return (
      <FlexContainer>
        <FlexItem>
          <P>{this.whoAreYou[counts % 3]}</P>
        </FlexItem>
        <FlexItem>
          <Button onClick={this.onClickButtonHandler} buttonType={this.buttonType}>
            Who are you?
          </Button>
        </FlexItem>
      </FlexContainer>
    );
  }
}

export default withErrorBoundary(ExamplePage);
