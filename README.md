# Hexadecimal Calculator

## Introduction
This project is an online calculator application that follows the **Test-Driven Development (TDD)** model. The calculator performs basic arithmetic operations on **hexadecimal numbers** while adhering to specific constraints.

## Functional Requirements
The calculator must:

### **General Functionality**
- Perform basic arithmetic operations: **addition (+), subtraction (-), multiplication (*), and division (/)** on hexadecimal numbers.
- Support only **2-digit hexadecimal inputs** (00 to FF).
- Return results with a maximum of **4 hexadecimal digits**.
- Ensure **no negative results**.
- Ensure **no decimal values** in the output.

### **User Input Handling**
- Accept hexadecimal inputs (0-9, A-F).
- Restrict input to a maximum of 2 hexadecimal digits.
- Display an error message for invalid inputs (e.g., letters outside A-F or numbers exceeding FF).

### **Output Handling**
- Display calculation results in **uppercase hexadecimal format**.
- If a calculation results in a negative number, return an error message.
- If a calculation results in a decimal, round it down to the nearest integer before converting it to hexadecimal.
- Limit outputs to a maximum of **4 hexadecimal digits**.

---

## Initial GitHub Setup
Follow these steps to set up the GitHub repository for this project:

### **1. Create a New GitHub Repository**
1. Go to [GitHub](https://github.com) and log in.
2. Click the **+** icon in the top right and select **New repository**.
3. Enter a repository name (e.g., `hexadecimal-calculator`).
4. Choose **Public** or **Private** visibility.
5. Select **Initialize this repository with a README** (optional).
6. Click **Create repository**.

### **2. Clone the Repository Locally**
Run the following command in your terminal:
```bash
git clone https://github.com/YOUR-USERNAME/hexadecimal-calculator.git
```
Replace `YOUR-USERNAME` with your actual GitHub username.

### **3. Initialize Git (If Not Already Done)**
```bash
cd hexadecimal-calculator
git init
```

### **4. Set Up the Remote Repository**
```bash
git remote add origin https://github.com/YOUR-USERNAME/hexadecimal-calculator.git
```

### **5. Add and Commit Initial Files**
```bash
git add .
git commit -m "Initial commit - Set up project structure"
```

### **6. Push Code to GitHub**
```bash
git branch -M main
git push -u origin main
```

---

## Next Steps
- Set up the NestJS framework for backend development.
- Implement test cases following the **Test-Driven Development (TDD)** approach.
- Build the calculator logic and user interface.

---

**Author:** Linda Masia  
**Course:** IMY 772  
**Date:** March 2025  

---
