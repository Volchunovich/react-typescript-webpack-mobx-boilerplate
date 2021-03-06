import { action, computed, observable } from 'mobx';
import { provide } from '../utils/ioc.utils';

@provide.singleton()
export class ExampleStore {
  @observable
  private count: number = 0;

  @computed
  get counts(): Readonly<number> {
    return this.count;
  }

  @action
  setCount(value: number) {
    this.count = value;
  }
}
