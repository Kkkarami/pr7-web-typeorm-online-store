# pr7-online-store-nestjs-typeorm

## Практична робота №7

**Тема:** Робота з базою даних PostgreSQL за допомогою TypeORM у NestJS.

**Варіант 4:** Доставка їжі та ресторани.

**Студент:** Феделеш Андрій КН-41

## Мета роботи

Ознайомитися з використанням ORM TypeORM у NestJS, навчитися підключати PostgreSQL, створювати сутності та реалізовувати CRUD-операції для роботи з базою даних.

## Виконані завдання

### Рівень 1. Підключення бази даних

- Налаштовано PostgreSQL за допомогою Docker Compose.
- Створено контейнер PostgreSQL 16.
- Підключено TypeORM до NestJS.
- Налаштовано автоматичне завантаження сутностей через `autoLoadEntities`.
- Створено сутність `DishEntity` для представлення страв у базі даних.
- Додано UUID як первинний ключ.
- Реалізовано автоматичне заповнення полів `createdAt` та `updatedAt`.

### Рівень 2. CRUD-операції через Repository

- Зареєстровано `DishEntity` у `DishesModule` за допомогою `TypeOrmModule.forFeature()`.
- Впроваджено `Repository<DishEntity>` у `DishesService`.
- Реалізовано отримання всіх страв.
- Реалізовано отримання страви за UUID.
- Реалізовано створення нової страви.
- Реалізовано оновлення інформації про страву.
- Реалізовано видалення страви.
- Додано обробку ситуацій, коли страва не знайдена, через `NotFoundException`.

## Використані технології

- Node.js
- TypeScript
- NestJS
- TypeORM
- PostgreSQL 16
- Docker Compose
- Thunder Client

## Перевірка роботи

CRUD-операції перевірено за допомогою Thunder Client:

| Метод | Endpoint | Результат |
|---|---|---|
| GET | `/dishes` | Отримання всіх страв |
| GET | `/dishes/:id` | Отримання страви за UUID |
| POST | `/dishes` | Створення страви |
| PATCH | `/dishes/:id` | Оновлення страви |
| DELETE | `/dishes/:id` | Видалення страви |

Додатково перевірено:
- Збереження створених страв у PostgreSQL.
- Автоматичну генерацію UUID.
- Автоматичне заповнення часових полів.
- Повернення статусу `404 Not Found` для неіснуючої страви.
- Повернення статусу `204 No Content` після успішного видалення.

  <img width="974" height="306" alt="зображення" src="https://github.com/user-attachments/assets/cf9e7489-8730-46d6-8934-04a6f4f916d5" />

  <img width="974" height="395" alt="зображення" src="https://github.com/user-attachments/assets/4808ed79-47be-4f5a-ab20-11baea165d1b" />

  <img width="974" height="392" alt="зображення" src="https://github.com/user-attachments/assets/187f4103-66ca-465b-a04f-6b8b41b73b07" />

  <img width="974" height="318" alt="зображення" src="https://github.com/user-attachments/assets/6815c8b4-466c-4430-a5ed-bf1be7350891" />

  <img width="974" height="273" alt="зображення" src="https://github.com/user-attachments/assets/f2f98980-2356-4995-83ee-8e1dd0366731" />

  <img width="974" height="322" alt="зображення" src="https://github.com/user-attachments/assets/daaa1e1c-3f1a-43c0-a9bd-47500cf9bd63" />

  <img width="974" height="281" alt="зображення" src="https://github.com/user-attachments/assets/737a7151-0939-4db5-aaa2-6305ea6a8ca0" />

  <img width="974" height="261" alt="зображення" src="https://github.com/user-attachments/assets/3608c5ec-36a4-4674-b5b4-946054933eb5" />


## Запуск проєкту

Запуск PostgreSQL:

```bash
docker compose up -d
```

Встановлення залежностей:

```bash
npm install
```

Запуск NestJS у режимі розробки:

```bash
npm run start:dev
```

Після запуску сервер доступний за адресою:

```text
http://localhost:3000
```

## Висновок

Під час виконання практичної роботи було налаштовано підключення PostgreSQL до NestJS за допомогою TypeORM. 
