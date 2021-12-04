import { Query } from '@datorama/akita';
import { SettingsStore, SettingsState, settingsStore } from './settings.store';

export class SettingsQuery extends Query<SettingsState> {
  state$ = this.select();

  constructor(protected store: SettingsStore) {
    super(store);
  }

}

export const settingsQuery = new SettingsQuery(settingsStore);
