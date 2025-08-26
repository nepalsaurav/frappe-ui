export declare function useDatePicker(): {
    currentYear: import('vue').Ref<number, number>;
    currentMonth: import('vue').Ref<number, number>;
    today: import('vue').ComputedRef<Date>;
    dates: import('vue').ComputedRef<Date[]>;
    datesAsWeeks: import('vue').ComputedRef<Date[][]>;
    formattedMonth: import('vue').ComputedRef<string>;
    prevMonth: () => void;
    nextMonth: () => void;
    changeMonth: (adder: number) => void;
};
