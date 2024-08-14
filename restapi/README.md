## Rest api built with node + typescript

### Testing Requests
- GET `curl -x GET http://localhost:8000/users | jq`
- POST `curl -d '{"name":"test", "age":10}' -H "Content-Type: application/json" -X POST http://localhost:8000/users`
- DELETE `curl -X DELETE http://localhost:8000/users/{userId}
