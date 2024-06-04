export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLE_DETAILS = 'article_details',
  ARTICLES = 'articles'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteNotFound = () => '*'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticles = () => '/articles'
