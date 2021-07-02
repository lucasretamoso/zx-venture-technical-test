export default function selectBeerByBitterness(beers: number[], target: number): number[] {
  const beersAnalyzed: { [key:string]: number } = {};
  const beerPairs: number[] = [];
  let index = 0;

  while (index < beers.length && beerPairs.length === 0) {
    const valueToSearch = target - beers[index];
    if (valueToSearch.toString() in beersAnalyzed) {
      beerPairs.push(beersAnalyzed[valueToSearch.toString()]);
      beerPairs.push(index);
    } else {
      beersAnalyzed[beers[index].toString()] = index;
      index += 1;
    }
  }

  return beerPairs;
}
