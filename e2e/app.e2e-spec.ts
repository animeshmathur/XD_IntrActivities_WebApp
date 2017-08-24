import { XDIntrActivitiesPage } from './app.po';

describe('xdintr-activities App', () => {
  let page: XDIntrActivitiesPage;

  beforeEach(() => {
    page = new XDIntrActivitiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
