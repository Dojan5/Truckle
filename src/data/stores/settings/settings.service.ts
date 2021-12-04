import { SettingsStore, settingsStore } from './settings.store';

export class SettingsService {

  constructor(private settingsStore: SettingsStore) {
  }

  toggleKiloDisplay() {
    settingsStore.update(state => ({ displayInKilos: !state.displayInKilos }));
  }

  toggleMillimetreDisplay() {
    settingsStore.update(state => ({ displayInMillimetres: !state.displayInMillimetres }));
  }

}

export const settingsService = new SettingsService(settingsStore);
