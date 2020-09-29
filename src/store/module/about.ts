import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "../index";

export interface AAboutState {
  count: number;
  list: Array<number>;
}

const getList = () => {
  return new Promise<Array<number>>(resovle => {
    setTimeout(() => {
      resovle([1, 2, 3, 4, 5, 6]);
    }, 500);
  });
};

@Module({
  name: "about",
  dynamic: true,
  store: store
})
export default class About extends VuexModule implements AAboutState {
  count = 1;
  list: Array<number> = [];

  get filterList(): Array<number> {
    return this.list.filter(item => item % 2 === 0);
  }

  @Mutation
  updateCount(payload: number): void {
    this.count += payload;
  }

  @Mutation
  updateList(payload: Array<number>): void {
    this.list = payload;
  }

  @Action
  async getList(): Promise<boolean> {
    const res: Array<number> = await getList();
    this.updateList(res);
    return Promise.resolve(true);
  }
}

export const AboutStore = getModule(About);
