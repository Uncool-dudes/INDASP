---
title: Dunder or magic methods
level: 2
layout: center
transition: fade
---

# Python Dunder Methods

## Special Methods for Customizing Object Behavior

- **Definition**: Dunder (double underscore) methods allow you to customize how Python objects behave with operators and built-in functions
- **Common Examples**:
  - `__init__`: Constructor for object initialization
  - `__str__`: String representation for human readability (`print()`)
  - `__repr__`: String representation for developer debugging
  - `__len__`: Support for `len()` function
  - `__add__`: Enables `+` operator between objects
  - `__getitem__`: Supports indexing with `object[key]`
- **Benefits**: Makes your custom classes behave like Python's built-in types
- **Usage**: Define these methods in your class to integrate with Python's language features

---
title: Example of the **add** dunder
level: 3
layout: cover
transition: slide-up
---

# `__add__` Method Example

## Customizing Addition for Objects

````md magic-move
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"
```

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(3, 4)
v2 = Vector(2, 7)
v3 = v1 + v2

print(v3)  # Output: Vector(5, 11) [3+2, 4+7]
```


```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        """Enable vector addition with the + operator"""
        return Vector(
            self.x + other.x,
            self.y + other.y
        )

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# Usage
v1 = Vector(3, 4)
v2 = Vector(2, 7)
v3 = v1 + v2  # Calls v1.__add__(v2)

print(v3)  # Output: Vector(5, 11)
```
````
