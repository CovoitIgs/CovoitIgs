import { CovoitigsPage } from './app.po';

describe('covoitigs App', () => {
  let page: CovoitigsPage;

  beforeEach(() => {
    page = new CovoitigsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
