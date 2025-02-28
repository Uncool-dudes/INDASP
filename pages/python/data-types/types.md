---
title: Data Types in python
level: 1
layout: cover
transition: fade
---

# Data Types in python
<v-click>completely optional...<v-click>not really</v-click></v-click>

<!--
- Python is a weakly typed language.
- [click] It doesn't *require* types for it to work.
- [click] Though this usually makes code so much harder to read and debug.
- This course will use it in so far as to introduce you to it, but no more.
 -->

---
title: Primitive and Non-Primitive Data Types
level: 2
layout: two-cols
transition: slide-up
layoutClass: gap-5
---

### Primitive Data types

```python {all|2-4|7-8|11|14|11|all}
# numeric
a = 10 # Integer
b = 10.5 # Float
c = 1 + 2j # Complex

# boolean
d = True
e = not True # False

# None
f = None

# Strings
g = 'testing'
```

<arrow v-click="[5,6]" x1="250" y1="310" x2="150" y2="275" color="#ffe873" width="2" arrowSize="1" />

::right::

### Non-primitive Data Types

```python {none|1|2|3|4|all}
numbers = [1, 2, 3, 4]                      # List
coordinates = (10.0, 20.0)                  # Tuple
person = {"name": "Alice", "age": 30}       # Dictionary
unique_numbers = {1, 2, 3, 4}               # Set
```

<!--
An overview of all data types python offers you
- [click] Numeric data types
    - Int has unlimited precision.
    - Floats can represent 15-17 digits of precision.
    - Complex data type have .real and .imag for the real and complex coefficients
- [click] Boolean are numerically 1 for True and 0 for False
- [click] None is a special constant in Python representing the absence of a value or a null value.
- [click] Strings, we will come back to this later.
- [click] Now does Null have an associated numeric counter part? like if I print it would i get 0?
- [click] That concludes the primitive types.
- [click] Lists are just a sequential collection of items of the same data type.
- [click] Tuples are ordered, immutable collections that can store items of different data types.
- [click] Dictionaries are collections of key-value pairs where keys are unique and immutable, allowing fast lookups by keys instead of positions.
- [click] Sets are unordered collections of unique elements that provide operations like union, intersection, and difference.
-->

---
title: Type annotation
level: 2
layout: cover
transition: slide-up
---

# Type annotation

Python is weakly typed, _it doesn't allow you to decide the type of your data_ **at run time**. But you can add type 'hints' to your code to make it more **Readable**

````md magic-move
```python {*|2|*}
# Primitive types
a = 10
b = 10.5
c = 'hello'

# Non Primitive types
a = [123,324,433,564]
b = (23.4, 43.2)
c = {'name': 'Bob', 'age': 20}
d = {1, 2, 3, 3, 4, 5}
```

```python
from typing import Dict, List, Set, Tuple
# Primitive types
a: int = 10
b: float = 10.5
c: str = "hello"

# Non Primitive types
a: List = [123, 324, 433, 564]
b: Tuple = (23.4, 43.2)
c: Dict = {"name": "Bob", "age": 20}
d: Set = {1, 2, 3, 3, 4, 5}
```

```python
from pprint import pprint
godfather = {
    "name": "The Godfather",
    "year": 1972,
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "reviewers_id" : {
        "user_1": 9.2,
        "user_2": 9.5,
        "user_1": 9.6
    },
    "is_awesome": True
}

pprint(godfather)
```

Non-code blocks are ignored.

```python
from pprint import pprint
from typing import Dict, List, Set, Union

User = Set[Dict[str, float]]
Fields = Union[str, int]

Movie = Dict[str, Union[str, int, List[str], Dict[str, float], bool]]

godfather: Movie = {
    "name": "The Godfather",
    "year": 1972,
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "reviewers_id": {
        "user_1": 9.2,
        "user_2": 9.5,
        "user_3": 9.6
    },
    "is_awesome": True
}

pprint(godfather)
```
````

<!--
- without types you can lose track of a lot of information of hour your functions work.
- [click] Take a
- [click] In the context of the whole file this, anyone could lose track of a changing from a integer to a list.
- [click] Adding type annotations we can see the type of a, fun fact this also gives you auto completion in IDEs.
- [click] A more complex example here is done by nesting multiple data types.
- [click] with type annotations I don't need to find the exact snippet for type information.
-->
