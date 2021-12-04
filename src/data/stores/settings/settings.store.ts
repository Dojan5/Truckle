import { Store, StoreConfig } from '@datorama/akita';

export interface SettingsState {
  displayInKilos: boolean;
  displayInMillimetres: boolean;
}

export function createInitialState(): SettingsState {
  return {
    displayInKilos: true,
    displayInMillimetres: true
  };
}

@StoreConfig({ name: 'settings' })
export class SettingsStore extends Store<SettingsState> {

  constructor() {
    super(createInitialState());
  }

}

export const settingsStore = new SettingsStore();
