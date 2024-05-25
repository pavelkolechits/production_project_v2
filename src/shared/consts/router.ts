export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
