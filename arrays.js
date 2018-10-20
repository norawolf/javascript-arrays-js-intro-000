var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
];

function addElementToBeginningOfArray(array, element) {
  const array = ['1']
  const element = ['foo', ...array]
  return element
};

describe('addElementToBeginningOfArray(array, element)', () => {
  it('adds an element to the beginning of an array', () => {
    expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
  })

  it('does not alter the original array', () => {
    const array = [1]

    addElementToBeginningOfArray(array, 'foo')

    expect(array).to.eql([1])
  })
})
