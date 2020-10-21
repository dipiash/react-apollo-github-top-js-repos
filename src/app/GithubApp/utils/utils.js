export const getDateCondition = (condition = '>=', date = new Date()) => {
  date.setDate(1);

  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;

  let day = date.getDate();
  day = day > 9 ? day : `0${day}`;

  return `created:${condition}${year}-${month}-${day}`;
};

export const getLicenseCondition = (license) => {
  if (!license || +license === 0) {
    return '';
  }

  return `license:${license}`;
};

export const getRepositoryNameCondition = (repositoryName) => (repositoryName ? `${repositoryName} in:name` : '');

export const getSortCondition = (field, sortBy = 'desc') => {
  if (!field) {
    return '';
  }

  return `sort:${field}-${sortBy}`;
};

export const getLanguageCondition = (lang) => {
  if (!lang) {
    return '';
  }

  return `language:${lang}`;
};
