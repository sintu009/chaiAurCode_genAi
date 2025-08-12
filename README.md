# Tokenizer Tool

A simple **web-based tool** for encoding and decoding text using two different tokenizers:  
**Custom Tokenizer** and **Character Tokenizer**.  
Built with **HTML**, **Tailwind CSS**, and **JavaScript**, the tool allows users to input text, encode it into tokens, decode tokens back into text, and view vocabulary quality metrics.

---

## ✨ Features

- **Custom Tokenizer**: Encodes text using a predefined vocabulary of lowercase letters and special characters, with specific token IDs (e.g., `a = 98`, `b = 97`).
- **Character Tokenizer**: Encodes text using lowercase letters, digits, and basic punctuation, with sequentially assigned token IDs.
- **Encode / Decode**: Convert text to tokens or tokens back to text for both tokenizers.
- **Vocabulary Quality**: Displays vocabulary size and coverage percentage for the given input text.
- **Responsive UI**: Built with **Tailwind CSS** for a clean, modern, and responsive design.
- **Tab Navigation**: Switch between Custom and Character Tokenizer tabs with smooth transitions.

---

## 🚀 Usage

1. **Open the Tool**

   - Load `index.html` in your web browser.

2. **Select a Tokenizer**

   - Click **Custom Tokenizer** or **Character Tokenizer** tab.

3. **Encode Text**

   - Enter text in the **Text to Encode** textarea.
   - Click **Encode** to see:
     - Tokenized output
     - Vocabulary quality metrics

4. **Decode Tokens**

   - Enter **comma-separated token IDs** (e.g., `98,97,96`) in the **Tokens to Decode** input.
   - Click **Decode** to see:
     - Decoded text
     - Vocabulary size

5. **View Output**
   - See token arrays, decoded text, and vocabulary metrics (size & coverage).

---

## 🧠 Tokenizer Details

### 1️⃣ Custom Tokenizer

- **Vocabulary**:
  - Lowercase letters (`a-z`) with specific token IDs (`a=98` → `z=73`).
  - Special characters (`!`, `@`, `#`, etc.).
  - `<PAD>` = `0`, `<UNK>` = `1`.
- **Encoding**:
  - Converts text to lowercase.
  - Unknown characters → `<UNK>` (`1`).
- **Decoding**:
  - Maps token IDs back to characters.
  - Unknown tokens → `<UNK>`.

### 2️⃣ Character Tokenizer

- **Vocabulary**:
  - Lowercase letters (`a-z`), digits (`0-9`), and basic punctuation (`. , ! ?`).
  - `<PAD>` = `0`, `<UNK>` varies.
- **Encoding**:
  - Sequential token IDs.
  - Unknown characters → `<UNK>`.
- **Decoding**:
  - Maps tokens back to characters.

---

## 📊 Output Format

- **Encode Output**:  
  `[98, 97, 96]` + vocabulary quality (size & coverage %)
- **Decode Output**:  
  Decoded text (e.g., `abc`) + vocabulary size
- **Vocabulary Quality**:
  - **Size**: Number of unique tokens
  - **Coverage**: Percentage of input chars found in vocabulary

---

## ⚙️ Technical Notes

- Fully **client-side** — runs in the browser.
- Buttons are temporarily disabled during processing (300ms simulated delay).
- Styled with **Tailwind CSS** + custom tab transition effects.
- Handles unknown characters with `<UNK>` token.
- Token inputs for decoding must be **comma-separated integers** — invalid entries are ignored.

---

## 📌 Limitations

- Custom Tokenizer vocabulary is fixed — may not cover all special characters.
- Character Tokenizer limited to basic set (a-z, 0-9, punctuation).
- Very large inputs may cause slight delays (browser-based processing).
- No persistence or backend — all data in memory.
