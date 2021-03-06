import _grossWeightTable from '../data/grossWeightTable.json';
import _roadLoadTable from '../data/roadLoadTable.json';

const grossWeightTable = _grossWeightTable as DataTable;
const roadLoadTable = _roadLoadTable as DataTable;

enum BearingClass {
    BK1 = 0,
    BK2 = 1,
    BK3 = 2,
    BK4 = 3
}

type CalculationResult = [
    BK1: number,
    BK2: number,
    BK3: number,
    BK4: number
];

interface DataTable {
    [key: string]: number[]
}

export function calculate(
    taxedWeight: number,
    frontAxleOverride: number,
    backAxleOverride: number,
    frontAxleTableKey: string,
    backAxleTableKey: string,
    grossWeightTableKey: string
): CalculationResult {
    let taxedWeightInKg: number = convertToKilo(taxedWeight);
    let frontAxleOverrideInKg: number = convertToKilo(frontAxleOverride);
    let backAxleOverrideInKg: number = convertToKilo(backAxleOverride);

    //Calculate
    let bk1 = calculateBearingClass(taxedWeightInKg, frontAxleOverrideInKg, backAxleOverrideInKg, frontAxleTableKey, backAxleTableKey, grossWeightTableKey, BearingClass.BK1);
    let bk2 = calculateBearingClass(taxedWeightInKg, frontAxleOverrideInKg, backAxleOverrideInKg, frontAxleTableKey, backAxleTableKey, grossWeightTableKey, BearingClass.BK2);
    let bk3 = calculateBearingClass(taxedWeightInKg, frontAxleOverrideInKg, backAxleOverrideInKg, frontAxleTableKey, backAxleTableKey, grossWeightTableKey, BearingClass.BK3);
    let bk4 = calculateBearingClass(taxedWeightInKg, frontAxleOverrideInKg, backAxleOverrideInKg, frontAxleTableKey, backAxleTableKey, grossWeightTableKey, BearingClass.BK4);

    let result = [bk1, bk2, bk3, bk4] as CalculationResult;
    return result;
}

function calculateBearingClass(
    taxedWeight: number,
    frontAxleOverride: number,
    backAxleOverride: number,
    frontAxleTableKey: string,
    backAxleTableKey: string,
    grossWeightTableKey: string,
    bClass: BearingClass
): number {

    let frontAxleTableValue = getLoadWeightValue(frontAxleTableKey, bClass);
    let backAxleTableValue = getLoadWeightValue(backAxleTableKey, bClass);
    let grossWeightTableValue = getGrossWeightValue(grossWeightTableKey, bClass);

    let frontAxleWeightAllowance = (frontAxleOverride <= frontAxleTableValue)
        ? frontAxleOverride
        : frontAxleTableValue;

    let backAxleWeightAllowance = (backAxleOverride <= backAxleTableValue)
        ? backAxleOverride
        : backAxleTableValue;

    let vehicleWeightAllowanceSum = frontAxleWeightAllowance + backAxleWeightAllowance;

    let grossWeightAllowance = (vehicleWeightAllowanceSum <= grossWeightTableValue)
        ? vehicleWeightAllowanceSum
        : grossWeightTableValue;

    //Only return taxed weight if it's smaller than the GWA, but actually has a value, otherwise ignore
    if (grossWeightAllowance > taxedWeight && taxedWeight > 0)
        return taxedWeight;

    return grossWeightAllowance;
}

export function convertToTonnes(value: number): number {
    return (value > 1000) ? (value / 1000) : value;
}

export function convertToKilo(value: number): number {
    return (value < 1000) ? (value * 1000) : value;
}

export function convertToMillimetres(value: number): number {
    return value * 1000;
}

export function calculateAllowedLoad(weightAllowance: number, serviceWeight: number): number {
    let value = ((weightAllowance - serviceWeight) < 0) ? 0 : (weightAllowance - serviceWeight);
    return value;
}

function getGrossWeightValue(key: string, bk: BearingClass): number {
    let tableValue = grossWeightTable[key]
    let value = convertToKilo(tableValue[bk]);
    return value;
}

function getLoadWeightValue(key: string, bk: BearingClass): number {
    let tableValue = roadLoadTable[key];
    let value = convertToKilo(tableValue[bk]);
    return value;
}