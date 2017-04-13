import { IFormBuildingService } from '.';

export interface IFormWatchingBuilder {
  withDebcounceTime(debounceMilliseconds: number): IFormWatchingBuilder;
  buildFormWatcher(): IFormBuildingService;
}
