/* -------------------- App setting -------------------- */
import client from '@/plugins/contentful';
import { getNestedReferences } from '@/utils/contentful';

/* -------- State -------- */
export const state = () => ({
  settings: null,
  footer: null,
});

/* -------- Mutations -------- */
export const mutations = {
  setSettings(state, payload) {
    state.settings = payload;
  },
};

/* -------- Actions -------- */
export const actions = {
  async getGlobals({ commit }) {
    console.log('get');
    let { items: [settings] } = await client.getEntries({
      content_type: 'settings',
    });
    let { items: [socials] } = await client.getEntries({
      content_type: 'socials',
    });
    settings = await getNestedReferences(settings);
    // footer = await getNestedReferences(footer);
    commit('setSettings', settings);
    // commit('setFooter', footer);
  },
};
