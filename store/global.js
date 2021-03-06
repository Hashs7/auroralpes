/* -------------------- App setting -------------------- */
import client from '@/plugins/contentful';
import { getNestedReferences } from '@/utils/contentful';

/* -------- State -------- */
export const state = () => ({
  settings: null,
  footer: null,
  projects: {
    pageSlug: null,
    items: [],
  },
});

/* -------- Mutations -------- */
export const mutations = {
  setSettings(state, payload) {
    state.settings = payload;
  },
  setFooter(state, payload) {
    state.footer = payload;
  },
  setProject(state, { projects, slug }) {
    state.projects.items = projects;
    state.projects.pageSlug = slug;
  },
};

/* -------- Actions -------- */
export const actions = {
  async getGlobals({ commit }) {
    let { items: [settings] } = await client.getEntries({
      content_type: 'settings',
    });
    let { items: [footer] } = await client.getEntries({
      content_type: 'footer',
    });
    settings = await getNestedReferences(settings);
    footer = await getNestedReferences(footer);
    commit('setSettings', settings);
    commit('setFooter', footer);
  },
  async getProjects({ commit }) {
    let { items: [fields] } = await client.getEntries({
      content_type: 'pageProjects',
    });
    // const { fields } = await client.getEntry('pageProjects');
    const { projects, slug } = fields.fields;
    commit('setProject', { projects, slug });
  },
};
