/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {
  let checkStatusM = !m ? true : isNaN(Number(m));
  let checkStatusN = !n ? true : isNaN(Number(n));

  if (checkStatusM || checkStatusN) {
    console.log('Введите два числа для получения суммы их сложения.');
    return false;
  }
  return Number(m) + Number(n);
}
