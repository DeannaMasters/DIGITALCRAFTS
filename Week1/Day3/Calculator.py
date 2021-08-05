firstNumber = int(input("What is the first number?"))
secondNumber = int(input("What is the second number:"))
operand = input("What is the operand? (*,/,+,-)")

print(firstNumber, secondNumber, operand)

if operand == "+":
    print(firstNumber + secondNumber)
if operand == "-":
    print(firstNumber - secondNumber)
if operand == "*":
    print(firstNumber * secondNumber)
if operand == "/":
    print(firstNumber / secondNumber)