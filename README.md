# University Course Management System

## Project Description

This project is a simple University Course Management System developed using JavaScript. The system simulates fetching student information from a database and performs different calculations and filtering operations on the student data.

The project demonstrates the use of:

* Asynchronous Callbacks
* `setTimeout()`
* ES6 Classes
* Object Property Descriptors
* Array Manipulation
* `map()`
* `filter()`
* `reduce()`
* Higher-Order Functions
* ES6 Modules (`import` / `export`)

---

## File Organization

The project consists of four main JavaScript files:

### `models.js`

This file contains the `Student` class.

The `Student` class includes:

* `id`
* `name`
* `courses`
* `addCourse()` method
* `getAverage()` method

The `id` property is created using `Object.defineProperty()` and is made read-only using:

```javascript
writable: false
```

It also cannot be deleted or reconfigured because:

```javascript
configurable: false
```

---

### `database.js`

This file simulates an asynchronous database.

It contains the:

```javascript
fetchStudents(callback)
```

function.

`setTimeout()` is used to simulate a 2-second delay before the student data is returned.

The data is passed to the callback function after the simulated database request is completed.

---

### `analytics.js`

This file contains the analytical functions used by the system:

* `calculateClassAverage()`
* `findTopStudent()`
* `filterStudents()`

`findTopStudent()` uses `reduce()` to find the student with the highest average grade.

`filterStudents()` is a higher-order function that accepts another function as a criterion and returns the students that satisfy the criterion.

---

### `main.js`

This is the main entry point of the application.

It:

1. Fetches the student data from `database.js`.
2. Converts the raw data into `Student` class instances.
3. Tests the immutability of the student ID.
4. Calculates the average grade for Course 101.
5. Finds the student with the highest overall average.
6. Finds all students who have taken Course 102.
7. Prints the results to the console.

---

## Example Output

```text
Fetching data from database...
Data received!

Testing Immutability:
Original ID: 1
Attempting to change ID to 999...
Final ID: 1 (Success: ID did not change)

--- Analytics Report ---
Class Average for Course 101: 73.33
Top Student: Ali (Average: 87.5)
Students in Course 102: Ali, Zeynep, Ahmet
```

---

## Challenges Faced
One of the main challenges was understanding how asynchronous callbacks work with `setTimeout()`. The student data is not available immediately, so the rest of the operations must be performed inside the callback after the data is received.

Another challenge was making the `id` property immutable. `Object.defineProperty()` was used with `writable: false` and `configurable: false` to prevent the ID from being changed or deleted.

Using `reduce()` to compare students based on their overall averages was another part that required careful understanding of how the accumulator works.

Finally, converting the raw database objects into actual `Student` class instances was important because methods such as `getAverage()` belong to the `Student` class.

---

## Technologies Used

* JavaScript
* Node.js
* ES6 Classes
* JavaScript Array Methods
* Git
* GitHub

---

## How to Run

Make sure Node.js is installed on the computer.

Run the project using:

```bash
node main.js
```

The program will simulate a 2-second database delay and then display the analytics report in the console.
