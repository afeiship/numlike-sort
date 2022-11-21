import fn from '../src';

describe('api.basic', () => {
  test('All of the numbers are string', () => {
    const list = ['1', '11', '2', '4', '5', '6',];

    expect(fn(list)).toEqual([
      '1',
      '2',
      '4',
      '5',
      '6',
      '11',
    ])
  });

  // all of the numbers has suffix: pic1,pic2,pic3
  test('All of the numbers has prefix', () => {
    const list = ['pic1', 'pic11', 'pic2', 'pic4', 'pic5', 'pic6',];

    expect(fn(list)).toEqual([
      'pic1',
      'pic2',
      'pic4',
      'pic5',
      'pic6',
      'pic11',
    ])
  });


  // all of the numbers has suffix: 1pic,2pic,3pic
  test('All of the numbers has suffix', () => {
    const list = ['1pic', '11pic', '2pic', '4pic', '5pic', '6pic',];

    expect(fn(list)).toEqual([
      '1pic',
      '2pic',
      '4pic',
      '5pic',
      '6pic',
      '11pic',
    ])
  });

  // customised iterator
  test('Customised iterator can sort', () => {
    const list = ['pic-1', 'pic1-2', 'pic2-6', 'pic4-12', 'pic5-3', 'pic6-4',];

    const iterator = (item: string, index: number): string => {
      return item.split('-')[1]
    }

    expect(fn(list, iterator)).toEqual([
      'pic-1',
      'pic1-2',
      'pic5-3',
      'pic6-4',
      'pic2-6',
      'pic4-12',
    ]);
  });
});
