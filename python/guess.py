import random

number = random.randint(1, 1000)
guesses = 0

print("I'm thinking of a number between 1 and 1000.")

while True:
    guess = int(input("\nWhat do you think it is? "))
    guesses += 1

    if guess > number:
        print("{0} is too high.".format(guess))
    elif guess < number:
        print("{0} is too low.".format(guess))
    else:
        break

print("\nCongratulations, you got it in {0} guesses!\n".format(guesses))
