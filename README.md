# 🌱 Agritech Server

এই প্রজেক্টটি একটি Node.js ভিত্তিক Agritech backend server যেখানে security, performance, authentication, validation এবং database management এর জন্য বিভিন্ন dependency ব্যবহার করা হয়েছে। নিচে প্রতিটি dependency এর সহজ বাংলা ব্যাখ্যা দেওয়া হলো।

------

## 🚀 Dependencies Summary (বাংলা ব্যাখ্যা)

### bcryptjs

👉 Password hash করার জন্য ব্যবহার হয়।

- Password plain text রাখা unsafe, তাই encryption করে store করা হয়।
- Login এর সময় hash compare করে verify করা হয়।

### compression

👉 Server response compress করে performance বাড়ায়।

- Data size কমে যায়
- Website দ্রুত load হয়

### cors

👉 Cross-Origin Resource Sharing control করে।

- Frontend অন্য domain থেকে API call করতে পারে
- Security control করা যায়

### dotenv

👉 Environment variable manage করে।

- Secret key, DB URL ইত্যাদি .env ফাইলে রাখা যায়
- Security ও config management সহজ হয়

### express

👉 Backend server framework।

- API তৈরি করা সহজ করে
- Routing, middleware, request handling দেয়

### express-rate-limit

👉 API abuse বা spam request prevent করে।

- নির্দিষ্ট time এ request limit করে
- DDoS attack থেকে protection দেয়

### helmet

👉 Security middleware collection।

- HTTP headers secure করে
- Common web vulnerability কমায়

### hpp

👉 HTTP Parameter Pollution attack prevent করে।

- Duplicate query parameter filtering করে

### http-errors

👉 Standard error object create করতে সাহায্য করে।

- Consistent error handling পাওয়া যায়

### jsonwebtoken

👉 JWT authentication এর জন্য।

- User login token generate
- Secure authentication system তৈরি হয়

### mongoose

👉 MongoDB database ORM library।

- Schema তৈরি করা যায়
- Database query সহজ হয়

### morgan

👉 HTTP request logging middleware।

- Debugging সহজ হয়
- Server monitoring করা যায়

### redis

👉 In-memory cache database।

- Fast data access
- Session/cache storage efficient হয়

### winston

👉 Advanced logging system।

- Error log, info log store করা যায়
- Production monitoring helpful

### xss-clean

👉 XSS attack prevent করে।

- Malicious script sanitize করে

### zod

👉 Schema validation library।

- Request data validation strong করে
- Type-safe validation পাওয়া যায়

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run Project

```bash
npm start
```

---

## ✨ Purpose

এই backend server এর লক্ষ্য:

- Secure agritech API তৈরি করা
- Farmer data management
- Performance optimized system
- Scalable backend architecture

---

## 🗄️ MongoDB Setup


5. সার্ভার স্টার্ট হওয়ার সময় `src/server.js` ফাইলে রাখা `connectDB()` ফাংশন `MONGO_URI` থেকে কানেকশন করবে।



