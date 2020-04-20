/* -------- State -------- */
export const state = () => ({
  counterDown: false,
  menuOpen: false,
  lmS: null,
});

/* -------- Mutations -------- */
export const mutations = {
  setCounterDown(state) {
    state.counterDown = true;
  },
  toggleMenu(state) {
    document.querySelector('body').classList.toggle('menuOpen');
    state.menuOpen = !state.menuOpen;
  },
  setBackgroundColor(state, isTransparent) {
    state.backgroundColor = isTransparent ? 'transparent' : '#FFF';
  },
  setScroll(state, locomotiveScroll) {
    state.lmS = locomotiveScroll;
  },
};

/* -------- Actions -------- */
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('global/getGlobals');
  },
};
