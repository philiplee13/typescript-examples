## Rest api built with node + typescript

-   stack is
    -   express
    -   typescript
    -   postgres

### Testing Requests

-   GET `curl -x GET http://localhost:8000/users | jq`
-   POST `curl -d '{"name":"test", "age":10}' -H "Content-Type: application/json" -X POST http://localhost:8000/users`
-   DELETE `curl -X DELETE http://localhost:8000/users/{userId}
-   PATCH

### Testing using jest

-   so for jest and typescript, it needs babel
-   https://jestjs.io/docs/getting-started#using-babel
-   and then also needs the @babel/preset-typescript module too
-   also seems like you need to fix the babel.config.js to babel.config.cjs https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c
