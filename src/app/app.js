var jsonUsers = "[\n    { \"id\": 1, \"name\": \"Alice\", \"email\": \"alice@example.com\" },\n    { \"id\": 2, \"name\": \"Bob\", \"email\": \"bob@example.com\" },\n    { \"id\": 3, \"name\": \"Charlie\", \"email\": \"charlie@example.com\" }\n]";
// Od kroku 3: Parsowanie JSON-a i wyświetlanie e-maili w pętli
var users = JSON.parse(jsonUsers);
users.forEach(function (user) {
    console.log("Email: ".concat(user.email));
});
