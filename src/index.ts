type Iterator = (item: string, index: number) => string;
type RealIterator = (item: string, index: number) => [string, number];

const NOT_NUM_RE = /\D/g;
const EMP = ''

export default (inArray: string[], inIterator?: Iterator): string[] => {
  const iterator = inIterator || ((item: string) => item.replace(NOT_NUM_RE, EMP));
  const realIterator: RealIterator = (item, index) => [iterator(item, index), index];
  const preprocessedList = inArray.map(realIterator);
  const result = preprocessedList.sort((a, b) => {
    const aNum = Number(a[0]);
    const bNum = Number(b[0]);

    if (aNum === bNum) return 0;

    return aNum > bNum ? 1 : -1;
  });

  return result.map((item) => inArray[item[1]]);
};
