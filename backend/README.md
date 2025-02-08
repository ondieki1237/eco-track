# 🚀 EcoTrack Backend Setup Guide

Welcome to the **EcoTrack** backend setup guide! This document will help you set up and install all necessary dependencies to get your backend running smoothly. 🛠️

---

## 📌 Prerequisites
Ensure you have the following installed on your system:

- [Python 3.8+](https://www.python.org/downloads/) 🐍
- [pip](https://pip.pypa.io/en/stable/installation/) (Python package manager)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) 🍃 (if using locally)

---

## 📂 Project Setup
### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/ondieki1237/eco-track.git
 cd eco-track/backend
```

### 2️⃣ Create a Virtual Environment
```sh
python3 -m venv venv
```

### 3️⃣ Activate the Virtual Environment
#### 🔹 On macOS/Linux:
```sh
source venv/bin/activate
```
#### 🔹 On Windows (Command Prompt):
```sh
venv\Scripts\activate
```
#### 🔹 On Windows (PowerShell):
```sh
venv\Scripts\Activate.ps1
```

You should see `(venv)` in your terminal, indicating that the virtual environment is active. ✅

---

## 📦 Install Dependencies
After activating the virtual environment, install all required dependencies using:
```sh
pip install -r requirements.txt
```

To verify the installation, run:
```sh
pip list
```

---

## 🔄 Updating Dependencies
If you install new packages, update the `requirements.txt` file with:
```sh
pip freeze > requirements.txt
```

---

## ▶️ Running the Backend
To start the backend server, use:
```sh
uvicorn main:app --reload
```
*(Modify `main:app` based on your entry file if necessary.)*

---

## 🎯 Additional Resources
- [FastAPI Documentation](https://fastapi.tiangolo.com/) ⚡
- [MongoDB Docs](https://www.mongodb.com/docs/) 🍃
- [Virtual Environments in Python](https://docs.python.org/3/tutorial/venv.html) 🐍

---

🚀 **You're all set!** Happy coding! 😃