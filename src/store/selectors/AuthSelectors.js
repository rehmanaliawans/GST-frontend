export const isAuthenticated = (state) => {
  console.log("auyth check ", state.auth.auth, state.auth.auth === "");
  if (state.auth.auth) return true;
  return false;
};
