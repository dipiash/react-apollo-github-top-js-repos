import {getDateSearchByCondition, getLicenseParams, getSearchNameParams} from '../utils';

describe('getDateSearchByCondition', () => {
    let year = null;
    let month = null;
    let day = null;

    beforeEach(() => {
        const date = new Date();
        date.setMonth(date.getMonth());

        year = date.getFullYear();

        month = date.getMonth();
        month = month > 9 ? month : `0${month}`;

        day = date.getDate();
        day = day > 9 ? day : `0${day}`;
    });

    it('getDateSearchByCondition =>', () => {
        const getDateSearchDefault = getDateSearchByCondition();
        expect(getDateSearchDefault).toBe(`created:>=${year}-${month}-${day}`);
    });

    it('getDateSearchByCondition <=', () => {
        const getDateSearchLate = getDateSearchByCondition('<=');
        expect(getDateSearchLate).toBe(`created:<=${year}-${month}-${day}`);
    });

    it('getDateSearchByCondition <= and date exists with month < 10', () => {
        const getDateSearchLate = getDateSearchByCondition('<=', new Date('2019-06-29'));
        expect(getDateSearchLate).toBe(`created:<=2019-05-29`);
    });

    it('getDateSearchByCondition <= and date exists with day < 10', () => {
        const getDateSearchLate = getDateSearchByCondition('<=', new Date('2019-11-10'));
        expect(getDateSearchLate).toBe(`created:<=2019-10-10`);
    });

    it('getDateSearchByCondition <= and date exists with day < 10 and month < 10', () => {
        const getDateSearchLate = getDateSearchByCondition('<=', new Date('2019-06-09'));
        expect(getDateSearchLate).toBe(`created:<=2019-05-09`);
    });
});

describe('getLicenseParams', () => {
    it('getLicenseParams without params', () => {
        expect(getLicenseParams()).toBe('')
    });

    it('getLicenseParams with null param', () => {
        expect(getLicenseParams(null)).toBe('')
    });

    it('getLicenseParams with valid param', () => {
        expect(getLicenseParams('mit')).toBe('license:mit')
    });
});

describe('getSearchNameParams', () => {
    it('getSearchNameParams without params', () => {
        expect(getSearchNameParams()).toBe('')
    });

    it('getSearchNameParams with null param', () => {
        expect(getSearchNameParams(null)).toBe('')
    });

    it('getSearchNameParams with valid param', () => {
        expect(getSearchNameParams('react')).toBe('react in:name')
    });
});
