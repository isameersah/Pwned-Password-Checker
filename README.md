# 🔐 Pwned Password Checker

Check if your password has been exposed in a public data breach using a secure and privacy-first method.

![React](https://img.shields.io/badge/Built_with-React-61DAFB?style=flat-square&logo=react) 
![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## 🧠 Overview

**Pwned Password Checker** is a simple, modern, and secure web application that allows users to check whether a password has been compromised in known public data breaches.

- ✅ Fast, real-time lookup
- 🛡️ Password privacy guaranteed (uses secure hashing and only partial hash sent)
- 🌐 Powered by a **free open public pwned passwords API**
- 🎯 Built with **React** and **TailwindCSS**
- 🚀 Deployed with **Vercel**

---

## 🚀 Live Demo

🔗 [Visit Live Website](https://thethirdeye.vercel.app)

---

## ⚙️ Features

- 🔍 Instantly check if a password has been pwned
- 🔐 Implements hash-based checking using a free public password breach API
- 🧠 Easy-to-use and mobile-friendly UI
- 🌙 Dark mode ready (optional)

---

## 🛠️ Tech Stack

| Tech          | Purpose                      |
|---------------|------------------------------|
| ⚛️ React       | Frontend framework           |
| 🎨 TailwindCSS | Styling with utility classes |
| ☁️ Vercel      | Deployment and hosting       |
| 🔓 Public API  | Password pwned check         |

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pwned-password-checker.git

# Navigate to the project directory
cd pwned-password-checker

# Install dependencies
npm install

# Start the development server
npm start

```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


---

## 📷 Screenshot

<p align="center">
  <img src="https://i.imgur.com/maNNAYk.png" alt="App Screenshot" width="400"/>
</p>


---

## 🔐 How It Works

1. The entered password is hashed using **SHA-1**.
2. Only the **first few characters** of the hash are sent to the **public breach API**.
3. The API returns a list of matching password hashes.
4. The app checks **locally** if your password's full hash is in the result.
5. ✅ **Your full password never leaves your browser!**

---

## 🙋‍♂️ Author

**Sameer Sah**  
🎓 Cybersecurity & Networking Enthusiast  
📍 Based in Nepal  
📬 [imsameersah@gmail.com](mailto:imsameersah@gmail.com)  
🔗 [GitHub](https://github.com/isameersah) • [LinkedIn](https://linkedin.com/in/isameersah)

---

## 📃 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share it for educational and ethical purposes.

---

## 🙏 Acknowledgements

- Thanks to the creators of the **free public pwned password API**
- Inspired by cybersecurity awareness and password hygiene practices

---
