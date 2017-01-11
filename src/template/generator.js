const handlebarsTransformer = require(`jstransformer`)(
    require(`jstransformer-handlebars`))

const handlebars = require(`handlebars`)

handlebars.registerHelper(`hello`, (name) => `Hello ${name}`)

module.exports = (template, locals) => {
  return handlebarsTransformer.render(template, locals).body
}
