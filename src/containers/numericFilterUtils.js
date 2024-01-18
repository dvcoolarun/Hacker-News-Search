export const getUpdatedNumericFilterValue = (value) => {
    const filterMap = {
        "all-time": 1171843200,
        "last-24-hours": 1,
        "past-week": 7,
        "past-month": 30,
        "past-year": 365
    };
    const timeStamp = Math.floor(Date.now() / 1000);
    let updatedTimestamp = timeStamp - (filterMap[value] * 24 * 60 * 60);

    if (value === "all-time") {
        return `created_at_i>${filterMap[value]}`;
    } else {
        return `created_at_i>${updatedTimestamp}`;
    }
};