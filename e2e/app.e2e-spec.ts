import { RannarFotoSharingPage } from './app.po';

describe('rannar-foto-sharing App', () => {
  let page: RannarFotoSharingPage;

  beforeEach(() => {
    page = new RannarFotoSharingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
