type DateConstructorParam = string | number | Date;
declare function getDate(...args: DateConstructorParam[]): Date;
declare function getDateValue(date: Date | string): string;
declare function getDatesAfter(date: Date, count: number): Date[];
declare function getDaysInMonth(monthIndex: number, year: number): number;
declare function isLeapYear(year: number): boolean;
export { getDate, getDateValue, getDatesAfter, getDaysInMonth, isLeapYear };
