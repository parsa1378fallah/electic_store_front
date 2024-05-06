import jalaali from 'jalaali-js';
export const convertToJalali = (isoDateString: Date) => {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const jalaaliDate = jalaali.toJalaali(year, month, day);

    const jalaliDateString = `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;

    return jalaliDateString;
};