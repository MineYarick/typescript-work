// Задача 1: Знайти найбільший елемент масиву чисел.
const numbers = [4, 2, 7, 1, 9, 5];
let maxNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
// console.log("Найбільший елемент масиву: ", maxNumber);
// Задача 2: Обчислити середнє арифметичне елементів масиву чисел.
const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers2) {
    sum += num;
}
const average = sum / numbers2.length;
// console.log("Середнє арифметичне: ", average);
// Задача 3: Знайти перший від'ємний елемент масиву чисел.
const numbers3 = [10, -20, 30, -40, 50];
let firstNegative;
for (let num of numbers3) {
    if (num < 0) {
        firstNegative = num;
        break;
    }
}
const item = { name: "Футболка", price: 20 };
const discount = 10; // відсоток знижки
const discountAmount = item.price * (discount / 100);
const totalPrice = item.price - discountAmount;
const John = { name: "John", hourlyRate: 10 };
const JohnAmount = John.hourlyRate * 40; // 40 годин роботи на тиждень
const invoice = { name: John.name, amount: JohnAmount };
const books = [
    { title: "Грокаємо Алгоритми", author: "Адітья Бхаргва", price: 25 },
    { title: "Мова програмування C++", author: "Бьерн Страуструп", price: 20 },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", price: 10 },
];
for (let book of books) {
    console.log(`Книга: ${book.title}, Автор: ${book.author}, Ціна: ${book.price}$`);
}
