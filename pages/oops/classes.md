---
title: Class syntax
level: 3
transition: slide-up
layout: center
---

# Syntax

````md magic-move
```python{*|1|2-3|5|9|10-11|*}
class class_name(parent_class_name):
    def __init__(self, arguments):
        self.arguments = arguments

    def function_name(self, function_arguments):
        # do something

# Creating a object
a = class_name(arguments) # calls __init__() function
a.arguments # access data members
a.function_name(function_arguments) # calling object function
```

```python{*|1|2|3-6|7-8|10-11}
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start(self):
        print(f"{self.make} {self.model} started.")

    def stop(self):
        print(f"{self.make} {self.model} stopped.")
```

```python{*|13|14|15|16-17|*}
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start(self):
        print(f"{self.make} {self.model} started.")

    def stop(self):
        print(f"{self.make} {self.model} stopped.")

class Car(Vehicle):
    def __init__(self, make, model, year, doors, has_air_conditioning):
        super().__init__(make, model, year)
        self.doors = doors
        self.has_air_conditioning = has_air_conditioning

    def honk(self):
        print("Beep! Beep!")
```
````
