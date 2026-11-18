export const navigate = (path) => {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event('routechange'))
  window.scrollTo({ top: 0, behavior: 'instant' })
}
