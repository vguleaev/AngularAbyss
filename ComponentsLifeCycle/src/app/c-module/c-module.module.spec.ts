import { CModuleModule } from './c-module.module';

describe('CModuleModule', () => {
  let cModuleModule: CModuleModule;

  beforeEach(() => {
    cModuleModule = new CModuleModule();
  });

  it('should create an instance', () => {
    expect(cModuleModule).toBeTruthy();
  });
});
