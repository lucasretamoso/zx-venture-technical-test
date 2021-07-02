import selectBeerByBitterness from '../../src/handler/services/bitternessService';

describe('The service selectBeerByBitterness', () => {
  it('Should return an empty array when we send an empty beers array and target equal 0', () => {
    expect(selectBeerByBitterness([], 0)).toStrictEqual([]);
  });

  test.each`
    beers           | target  | expected
    ${[1, 2, 3]}    | ${1}    | ${[]}
    ${[1, 2, 3]}    | ${5}    | ${[1,2]}
    ${[1, 2, 3, 4]} | ${5}    | ${[1, 2]}
`('Should return $expected where we sent $beers and $target', ({ beers, target, expected }) => {
    expect(selectBeerByBitterness(beers, target)).toStrictEqual(expected);
  });
});
