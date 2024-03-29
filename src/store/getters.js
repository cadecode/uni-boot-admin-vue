const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo,
  routes: state => state.user.routes,
  visitedViews: state => state.view.visitedViews,
  cachedViews: state => state.view.cachedViews
};
export default getters;
