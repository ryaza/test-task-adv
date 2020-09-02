export default class DatetimeUtil {
  /**
     * Return '07' from 7 and '17' from 17
     * @param number
     * @return {String}
     */
  static formatDate(number) {
    if (number <= 9) {
      return `0${number}`;
    }
    return `${number}`;
  }
}
