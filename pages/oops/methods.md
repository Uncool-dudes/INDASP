---
title: Method Overriding
level: 2
layout: cover
transition: fade
---

### Method Overriding
- **Definition**: Redefining a method in a child class that was already defined in a parent class
````md magic-move
```python
class Animal:
    def make_sound(self):
        return "Generic animal sound"
```

```python{*|2,5-6|*}
class Animal:
    def make_sound(self):
        return "Generic animal sound"

class Dog(Animal):
    def make_sound(self):  # Overriding parent method
        return "Woof!"
```
````


---
title: Method Overriding
level: 2
layout: cover
transition: slide-up
---

### Method Overloading
- **Definition**: Creating multiple methods with the same name but different parameters
- **Python Approach**: Uses default arguments or variable arguments instead of traditional overloading
````md magic-move
```python
class Calculator:
    def add(self,a,b,c):
        # All arguments are required
```


```python
class Calculator:
    def add(self, a, b=None, c=None):
        if b is None and c is None:
            return a
        elif c is None:
            return a + b
        else:
            return a + b + c
```
````
