from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import hashlib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

HASH_FUNCTIONS = {
    "MD5": hashlib.md5,
    "SHA1": hashlib.sha1,
    "SHA224": hashlib.sha224,
    "SHA256": hashlib.sha256,
    "SHA512": hashlib.sha512,
}

SUMMARIES = {
    "MD5": "MD5 produces a 128-bit hash, mainly used for checksums, but not secure for cryptographic use.",
    "SHA1": "SHA-1 outputs a 160-bit hash, once popular but now considered weak for security purposes.",
    "SHA224": "SHA-224 is a truncated SHA-256 version that produces a 224-bit digest.",
    "SHA256": "SHA-256 is widely used in modern cryptography, producing a 256-bit hash value.",
    "SHA512": "SHA-512 produces a 512-bit hash and is extremely secure and robust for modern applications.",
}

@app.get("/hash")
def get_hash(value: str = Query(...), algorithm: str = Query(...)):
    algo = HASH_FUNCTIONS.get(algorithm.upper())
    if not algo:
        return {"error": "Invalid hashing algorithm selected."}
    hashed = algo(value.encode()).hexdigest()
    return {
        "algorithm": algorithm.upper(),
        "input": value,
        "hash": hashed,
        "summary": SUMMARIES[algorithm.upper()],
    }
