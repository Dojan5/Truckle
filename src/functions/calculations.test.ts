import * as c from "./calculations"

test('converts tonne value to tonnes', () => {
    expect(c.convertToTonnes(15)).toBeCloseTo(15);
});

test('converts kilo value to tonnes', () => {
    expect(c.convertToTonnes(25750)).toBeCloseTo(25.75);
});

test("ensures kilo is converted to tonne", () => {
    expect(c.convertToTonnes(32000)).not.toBe(32000);
})

test('converts kilo value to kilo', () => {
    expect(c.convertToKilo(13552)).toBeCloseTo(13552);
})

test('converts tonne to kilo', () => {
    expect(c.convertToKilo(36.44)).toBeCloseTo(36440);
})

test('test first vehicle calculations', () => {
    expect(c.calculate(26000, 8000, 19000, "singleAxleNoPower", "boggiVVF", "5.8"))
    .toStrictEqual([26000, 23860, 17000, 26000]);
});

test('test second vehicle calculation', () => {
    expect(c.calculate(18000, 7650, 11500, "singleAxleNoPower", "singleAxleWithPower", "5.2"))
    .toStrictEqual([18000, 17650, 15650, 18000]);
});

test('test vehicle with trailer calc', () => {
    expect(c.calculate(38000, 18000, 20000, "boggiVVF", "boggi18plus", "10.0"))
    .toStrictEqual([38000, 31000, 22500, 38000])
});