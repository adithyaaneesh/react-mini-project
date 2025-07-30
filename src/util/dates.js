

/**
 * 
 * @param {Date} val - date instance
 * @returns - a date value from the instance
 */
export const getDate = (val) => {

    const date = `${val.getFullYear()}-${val.getDate()}-${val.getDay()}`

    return date
}
