const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.add(10)
    queue.add(20)
    expect(queue.size()).toBe(2)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.add(5)
    expect(queue.elements).toEqual([5])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(5)
    queue.add(4)
    expect(queue.peek()).toBe(5)
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add(8)
    queue.add(4)
    queue.add(2)
    const removed = queue.dequeue()
    expect(removed).toBe(8)
    expect(queue.elements).toEqual([4, 2]);
  })
})