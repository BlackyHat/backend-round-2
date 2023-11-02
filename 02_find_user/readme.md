# 01: Auth API 🖥️ ⚓

# Use API 💾 🌐

Run it:

```run
env $(cat .env | xargs) node server.js
```

So, in total, API should:

Detect user's IP;
Determine user's location by IP using a CSV database;
Return the a response (or output to the console) with user's address range (in a human-readable form) and country from the csv table.

- Or return a response (or output to the console) indicating the correct country when you send the IP in the body of the request
