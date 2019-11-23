export const getDateSearchByCondition = (condition = '>=', date = new Date()) => {
    date.setMonth(date.getMonth());

    const year = date.getFullYear();

    let month = date.getMonth();
    month = month > 9 ? month : `0${month}`;

    let day = date.getDate();
    day = day > 9 ? day : `0${day}`;

    return `created:${condition}${year}-${month}-${day}`
};

export const getLicenseParams = license => {
    if (!license || +license === 0) {
        return '';
    }

    return `license:${license}`;
};

export const getSearchNameParams = searchName => searchName ? `${searchName} in:name`: '';
