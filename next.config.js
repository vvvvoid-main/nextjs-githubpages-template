const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? "/nextjs-githubpages-template" : "",
  trailingSlash: true,
}
