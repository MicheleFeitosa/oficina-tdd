const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.soma(2, 3)).toBe(5)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.subtracao(10, 8)).toBe(2)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.multiplicacao(5, 3)).toBe(15)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora()
    expect(calculadora.divisao(81, 3)).toBe(27)
  })
})