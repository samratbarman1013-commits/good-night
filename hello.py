# The most useful Python script ever written
import time
import random

def say_good_night():
    messages = [
        "Good night! 🌙",
        "Sweet dreams! 😴",
        "Sleep tight! ⭐",
        "Don't let the bed bugs bite! 🐜",
        "May the force be with your pillow. 🛏️",
        "404: Sleep not found. Try again. 💤",
    ]
    print(random.choice(messages))

if __name__ == "__main__":
    print("Initializing sleep protocol...")
    time.sleep(1)
    print("Loading dreams...")
    time.sleep(1)
    say_good_night()
    print("Process terminated. Goodbye.")
