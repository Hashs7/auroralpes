export const state = () => ({
   counterDown: false
});

export const mutations = {
    setCounterDown(state) {
        state.counterDown = true;
    }
};
