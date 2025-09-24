// Задача 1: Функция для вычисления площади прямоугольника
function calculateRectangleArea(width: number, height: number): string {
    return `Площадь прямоугольника: ${width * height} см^2`;
}
// console.log(calculateRectangleArea(5, 3));
// console.log(calculateRectangleArea(7, 4));

// Задача 2: Функція для створення користувача з роллю

enum Role {
    Admin = 'Адміністратор',
    User = 'Користувач',
    Guest = 'Гість'
}

type User = {
    name: string;
    age: number;
    role: Role;
};

function createUser(name: string, age: number, role: Role = Role.Guest): User {
    return { 
        name, 
        age, 
        role 
    };
}

const user1 = createUser('Іван', 30, Role.Admin);
const user2 = createUser('Олена', 25, Role.User);
const user3 = createUser('Кирило', 44); // роль за замовчуванням - Гість

// console.log(user1);
// console.log(user2);
// console.log(user3);

// Задача 3: Функція для перевірки мінімальної довжини пароля

function validatePassword(password: string, minLength?: number): boolean {
    if(minLength === undefined) {
        minLength = 8; // Значення за замовчуванням
    }

    return password.length >= minLength;
}

// console.log(validatePassword('mypassword')); // true
// console.log(validatePassword('short')); // false
// console.log(validatePassword('mypassword', 12)); // false
// console.log(validatePassword('mypassword', 9)); // true

// Задача 4: Функція для обчислення середнього значення з довільної кількості чисел

function calculateAverage(...numbers: Array<number>): number {
    if (numbers.length === 0) {
        console.log('No numbers provided.');
        return 0;
    }

    const sum =numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

// console.log(calculateAverage(5, 10, 15, 20));
// console.log(calculateAverage(2, 4, 6));



type Product = {
    name: string;
    price: number;
};

function calculateOrderTotal(...products: Array<Product>): number {
    if (products.length === 0) {
        console.log('Замовлення порожнє.');
        return 0;
    }

    let total = 0;
    for (const product of products) {
        if (product.price <= 0) {
            console.log(`Неправильна ціна для товару: ${product.name}`);
            continue;
        }
        total += product.price;
    }
    return total;
}

const products: Array<Product> = [
    { name: 'Телефон', price: 1000 },
    { name: 'Ноутбук', price: 2500 },
    { name: 'Планшет', price: -50 }, // Неправильна ціна
];

const orderTotal = calculateOrderTotal(...products);
console.log(`Загальна вартість замовлення: ${orderTotal} Грн`);