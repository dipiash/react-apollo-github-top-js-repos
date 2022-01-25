import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from '../utils';

describe('getDateCondition', () => {
  let year = null;
  let month = null;
  let day = null;

  beforeEach(() => {
    const date = new Date();
    date.setDate(1);

    year = date.getFullYear();

    month = date.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;

    day = date.getDate();
    day = day > 9 ? day : `0${day}`;
  });

  it('getDateCondition =>', () => {
    const getDateSearchDefault = getDateCondition();
    expect(getDateSearchDefault).toBe(`created:>=${year}-${month}-${day}`);
  });

  it('getDateCondition <=', () => {
    const getDateSearchLate = getDateCondition('<=');
    expect(getDateSearchLate).toBe(`created:<=${year}-${month}-${day}`);
  });

  it('getDateCondition <= and date exists with month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2019-06-01'));
    expect(getDateSearchLate).toBe(`created:<=2019-06-01`);
  });

  it('getDateCondition <= and date exists with day < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2019-11-10'));
    expect(getDateSearchLate).toBe(`created:<=2019-11-01`);
  });

  it('getDateCondition <= and date exists with day < 10 and month < 10', () => {
    const getDateSearchLate = getDateCondition('<=', new Date('2019-06-09'));
    expect(getDateSearchLate).toBe(`created:<=2019-06-01`);
  });
});

describe('getLicenseCondition', () => {
  it('getLicenseCondition without params', () => {
    expect(getLicenseCondition()).toBe('');
  });

  it('getLicenseCondition with null param', () => {
    expect(getLicenseCondition(null)).toBe('');
  });

  it('getLicenseCondition with valid param', () => {
    expect(getLicenseCondition('mit')).toBe('license:mit');
  });
});

describe('getRepositoryNameCondition', () => {
  it('getRepositoryNameCondition without params', () => {
    expect(getRepositoryNameCondition()).toBe('');
  });

  it('getRepositoryNameCondition with null param', () => {
    expect(getRepositoryNameCondition(null)).toBe('');
  });

  it('getRepositoryNameCondition with valid param', () => {
    expect(getRepositoryNameCondition('react')).toBe('react in:name');
  });
});

describe('getSortCondition', () => {
  it('getSortCondition without params', () => {
    expect(getSortCondition()).toBe('');
  });

  it('getSortCondition with null param', () => {
    expect(getSortCondition(null)).toBe('');
  });

  it('getSortCondition with field param and default sortBy', () => {
    expect(getSortCondition('stars')).toBe('sort:stars-desc');
  });

  it('getSortCondition with field param and sort by asc', () => {
    expect(getSortCondition('stars', 'asc')).toBe('sort:stars-asc');
  });
});

describe('getLanguageCondition', () => {
  it('checks if getLanguageCondition without params is an empty string', () => {
    expect(getLanguageCondition()).toBe('');
  });

  it('getLanguageCondition with null param', () => {
    expect(getLanguageCondition(null)).toBe('');
  });

  it('getLanguageCondition with field param and default sortBy', () => {
    expect(getLanguageCondition('JavaScript')).toBe('language:JavaScript');
  });
});
