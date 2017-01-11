const generator = require(`./generator`)

describe(`generator`, () => {

  it(`should interpolate`, () => {
    expect(generator(`Hello {{name}}`, { name: `World` })).toBe(`Hello World`)
  })

  it(`should use helpers`, () => {
    expect(generator(`{{hello name}}`, { name: `World` })).toBe(`Hello World`)
  })  

})
