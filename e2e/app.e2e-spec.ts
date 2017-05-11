import { Ng2TestDemoPage } from './app.po';

describe('ng2-test-demo App', () => {
  let page: Ng2TestDemoPage;

  beforeEach(() => {
    page = new Ng2TestDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
