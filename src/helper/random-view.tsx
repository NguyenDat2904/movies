function getRandomNumber() {
  const number = Math.floor(Math.random() * 1000000) + 1;
  return number.toLocaleString("vi-VN"); // 'vi-VN' for Vietnamese locale
}
export default getRandomNumber;
