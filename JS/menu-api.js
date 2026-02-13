// ============================================================
//  MENU API — talks to JSONBin to store/read the daily menu
// ============================================================

import { JSONBIN_CONFIG } from './jsonbin-config.js';

const BASE_URL = 'https://api.jsonbin.io/v3/b';

export const MenuAPI = {

    // Read the full menu object from JSONBin
    async getAll() {
        try {
            const res = await fetch(`${BASE_URL}/${JSONBIN_CONFIG.BIN_ID}/latest`, {
                headers: { 'X-Master-Key': JSONBIN_CONFIG.API_KEY }
            });
            if (!res.ok) throw new Error('Failed to fetch');
            const json = await res.json();
            return json.record || {};        // { "2025-06-01": { breakfast:[...], lunch:[...], dinner:[...] } }
        } catch (e) {
            console.error('MenuAPI.getAll error:', e);
            return {};
        }
    },

    // Get menu for a specific date (e.g. "2025-06-01")
    async getForDate(dateKey) {
        const all = await this.getAll();
        return all[dateKey] || null;
    },

    // Save / overwrite menu for a specific date
    async saveForDate(dateKey, menuData) {
        try {
            // First get existing data so we don't overwrite other days
            const all = await this.getAll();
            all[dateKey] = menuData;

            const res = await fetch(`${BASE_URL}/${JSONBIN_CONFIG.BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_CONFIG.API_KEY
                },
                body: JSON.stringify(all)
            });
            if (!res.ok) throw new Error('Failed to save');
            return true;
        } catch (e) {
            console.error('MenuAPI.saveForDate error:', e);
            return false;
        }
    }
};
