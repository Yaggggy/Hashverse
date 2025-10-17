# HashVerse

![HashVerse](https://img.shields.io/badge/Project-HashVerse-blue?style=flat-square)

HashVerse is a sleek, dark-themed web application that allows users to generate cryptographic hashes using multiple popular hashing algorithms. Enter any input, choose a hashing algorithm, and instantly see the resulting hash along with a brief summary of the algorithm.

---

## 🔑 What is Hashing?

Hashing is the process of converting data of **any size** into a **fixed-size string** (usually a hexadecimal number) using a mathematical function called a **hash function**.

- **One-way function**: You cannot easily reverse a hash to get the original input.
- **Fixed-size output**: No matter how long the input is, the hash has a fixed length.
- **Deterministic**: Same input always produces the same hash.
- **Avalanche effect**: Small changes in input produce drastically different hashes.

Hashing is widely used in:

- Password storage (never store raw passwords!)
- Data integrity verification
- Digital signatures
- Blockchain and cryptocurrency

---

## 🛠️ Popular Hash Algorithms

| Algorithm   | Output Size             | Summary                                                                                            |
| ----------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| **MD5**     | 128-bit (32 hex chars)  | Fast and widely used for checksums, but **not secure** for cryptography anymore due to collisions. |
| **SHA-1**   | 160-bit (40 hex chars)  | Older cryptographic hash, better than MD5, but also **no longer secure** for sensitive data.       |
| **SHA-256** | 256-bit (64 hex chars)  | Part of SHA-2 family. Highly secure and widely used for blockchain and certificates.               |
| **SHA-512** | 512-bit (128 hex chars) | Strongest of SHA-2 family. Used for high-security applications.                                    |
| **SHA-384** | 384-bit (96 hex chars)  | Truncated version of SHA-512, offers high security with smaller output.                            |

> 💡 Tip: Always use SHA-2 (SHA-256 or SHA-512) or SHA-3 for any real cryptographic applications.

---

## ⚡ Project Features

- **Input any text**: From “hello” to complex strings.
- **Select a hashing algorithm**: MD5, SHA-1, SHA-256, SHA-512, SHA-384.
- **Instant hash generation**: Output displayed below input.
- **Algorithm summary**: Brief explanation of how the hash is generated and its security.
- **Dark theme UI**: Easy on the eyes with a modern, minimalistic interface.
- **Responsive design**: Works on desktop, tablet, and mobile.

---

## 🖥️ Tech Stack

- **Frontend:** React.js
- **Backend:** Python FastAPI
- **Deployment:** Render (backend) + Netlify (frontend)
- **Styling:** Vanilla CSS (no Tailwind)

---

## 🚀 How HashVerse Works

1. User enters input text.
2. User selects a hashing algorithm.
3. Frontend sends request to FastAPI backend.
4. Backend computes the hash using Python’s `hashlib` module.
5. Result is returned to frontend along with a short explanation of the selected algorithm.
6. Frontend displays hash and algorithm summary in a clean, dark-themed UI.

---

## 🌐 Live Demo

- **Backend:** [https://hashverse.onrender.com](https://hashverse.onrender.com)
- **Frontend:** (replace with your deployed Netlify URL)

---

## 📚 Learn More About Hashing

- [MD5](https://en.wikipedia.org/wiki/MD5)
- [SHA Family](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms)
- [Hashing Concepts](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

---

## 🛠 Installation (for Developers)

```bash
# Clone the repo
git clone https://github.com/yourusername/Hashverse.git
cd Hashverse/backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run backend
uvicorn app.main:app --reload
```
