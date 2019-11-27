const {
  Stack,
} = require('./main.js')

let stack;

beforeEach(() => {
  stack = Stack();
})

describe('Stack', () => {
  it(`returns an object`, () => {
    expect(typeof stack).toBe('object')
  })

  it(`has an items property that holds an empty array`, () => {
    expect(Array.isArray(stack.items)).toBe(true);
    expect(stack.items.length).toBe(0);
  })

  it(`has an add method that puts an item at the end of the stack without affecting any other items`, () => {
    stack.add('Colin')
    expect(stack.items[0]).toBe('Colin')
    stack.add('Mess')
    stack.add('JD')
    stack.add('Ginny')
    expect(stack.items[0]).toBe('Colin')
    expect(stack.items[3]).toBe('Ginny')
  })

  it(`has a remove function that removes and returns from the top of the stack`, () => {
    stack.add('Colin')
    stack.add('Mess')
    stack.add('JD')
    stack.add('Ginny')
    expect(stack.remove()).toBe('Ginny')
    expect(stack.remove()).toBe('JD')
    expect(stack.remove()).toBe('Mess')
    expect(stack.remove()).toBe('Colin')
  })

  it(`has a peek function that returns the item on the top of stack without removing it`, () => {
    stack.add('Colin')
    stack.add('Mess')
    stack.add('JD')
    expect(stack.peek()).toBe('JD')
    stack.add('Ginny')
    expect(stack.peek()).toBe('Ginny')
  })
})