import { CliReduxSamplePage } from './app.po';

describe('cli-redux-sample App', () => {
  let page: CliReduxSamplePage;

  beforeEach(() => {
    page = new CliReduxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
