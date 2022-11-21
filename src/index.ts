type Iterator = (item: string, index: number) => string;

const NOT_NUM_RE = /\D/g;

export default (list: string[], inIterator?: Iterator): string[] => {
  const iterator = inIterator || ((item: string) => item.replace(NOT_NUM_RE, ''));
  const realIterator = (item: string, index: number): [string, number] => [iterator(item, index), index];
  const preprocessedList = list.map(realIterator);
  const result = preprocessedList.sort((a, b) => {
    const aNum = Number(a[0]);
    const bNum = Number(b[0]);

    if (aNum === bNum) return 0;

    return Number(aNum) > Number(bNum) ? 1 : -1;
  });

  return result.map((item) => list[item[1]]);
};
