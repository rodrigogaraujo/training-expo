export const stripHTML = (str: string) => {
    if ((str === null) || (str === ''))
        return '';
    else
        str = str.toString();

    return str.replace( /(<([^>]+)>)/ig, '');
}