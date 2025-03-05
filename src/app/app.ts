const jsonUsers = `[
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "bob@example.com" },
    { "id": 3, "name": "Charlie", "email": "charlie@example.com" }
]`;

interface User {
    id: number;
    name: string;
    email: string;
}

// Od kroku 3: Parsowanie JSON-a i wyświetlanie e-maili w pętli
const users: User[] = JSON.parse(jsonUsers);
users.forEach(user => {
    console.log(`Email: ${user.email}`);
});