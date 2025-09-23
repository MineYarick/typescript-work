// Задача 1: Знайти найбільший елемент масиву чисел.
const numbers: number[] = [4, 2, 7, 1, 9, 5];

let maxNumber = numbers[0];

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

// console.log("Найбільший елемент масиву: ", maxNumber);

// Задача 2: Обчислити середнє арифметичне елементів масиву чисел.
const numbers2: number[] = [10, 20, 30, 40, 50];

let sum: number = 0;

for(let num of numbers2) {
    sum += num;
}
const average: number = sum / numbers2.length;

// console.log("Середнє арифметичне: ", average);

// Задача 3: Знайти перший від'ємний елемент масиву чисел.
const numbers3: number[] = [10, -20, 30, -40, 50];
let firstNegative: number | undefined;

for(let num of numbers3) {
    if (num < 0) {
        firstNegative = num;
        break;
    }
}

// console.log("Перший від'ємний елемент масиву: ", firstNegative);

// Задача 4: Обчислити загальну вартість товару зі знижкою.
type Item = {
    name: string;
    price: number;
}

const item: Item = { name: "Футболка", price: 20 };
const discount: number = 10; // відсоток знижки
const discountAmount: number = item.price * (discount / 100);
const totalPrice: number = item.price - discountAmount;

// console.log(`Ціна товару ${item.name}, зі знижкою у ${discount}%: `, totalPrice);

// Задача 5: Створити рахунок-фактуру для працівника на основі його погодинної ставки та відпрацьованих годин.

type Employee = {
    name: string;
    hourlyRate: number;
}

type Paycheck = {
    name: string;
    amount: number;
}

const John: Employee = { name: "John", hourlyRate: 10 };
const JohnAmount: number = John.hourlyRate * 40; // 40 годин роботи на тиждень

const invoice: Paycheck = { name: John.name, amount: JohnAmount };

// console.log(`Зарплатня працівника ${invoice.name}: ${invoice.amount}$`);

// Задача 6: Вивести інформацію про книги в бібліотеці.

type Book = {
    title: string;
    author: string;
    price: number;
}

const books: Book[] = [
    { title: "Грокаємо Алгоритми", author: "Адітья Бхаргва", price: 25 },
    { title: "Мова програмування C++", author: "Бьерн Страуструп", price: 20 },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", price: 10 },
];

for(let book of books) {
    console.log(`Книга: ${book.title}, Автор: ${book.author}, Ціна: ${book.price}$`);
}
