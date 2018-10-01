import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {type: 'SET_TEXT_FILTER', text: 'test'};
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
    const date = moment();
    const action = {type: 'SET_START_DATE', startDate:date};
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toBe(date);
});

test('should set ENDDate filter', () => {
    const date = moment();
    const action = {type: 'SET_END_DATE', endDate:date};
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toBe(date);
});
