import sorter from '../index';

test('array equality', () => {
    const character = 
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ];

    const result = sorter(character);
    expect(result).toEqual(character);
})
