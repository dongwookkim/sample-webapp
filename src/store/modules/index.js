const requireModule = require.context('.', false, /\.module\.js$/)
const modules = {}

requireModule.keys().forEach(filename => {
  const moduleName = filename.replace(/(\.\/|\.module\.js)/g, '')
  modules[moduleName] =
    requireModule(filename).default || requireModule(filename)
})

export default modules
