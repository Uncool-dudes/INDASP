---
title: Strings
transition: fade
layout: center
level: 2
---

# Strings

- Basics
- Methods

---
title: Basics
level: 3
layout: center
---

# Basics
````md magic-move
```python
"This is a string"
'This is also a string'
""" THis is a multiline string and used for documentation"""
```

```python
"Strings can be " + "concatenated with addition"
"Strings can be repeated by multiplication" * 3
```

```python
a = "Strings are arrays so slicing works here too!"
print(a[::-1]) #!oot ereh skrow gnicils os syarra era sgnirtS
```

```python{1-2|3|3-5}
a = "F-strings"
b = f"{a} are declared with f at the beginning"
a = ["People", "Strings", "Animals"]
for thing in a:
    print("{} can be used with format to fill in template strings".format(thing) )
```
````

---
title: Is Functions
level: 3
layout: center
---

# Is Functions
````md magic-move
```python
a = "testing123"
b = "Testing 123"
print(a.isalnum())
print(b.isalnum())
```
```python
print(a.isalnum()) # True
print(b.isalnum()) # False
```

```python
a = "testing1"
b = "Testing"
print(a.isalpha())
print(b.isalpha())
```
```python
print(a.isalpha()) # False
print(b.isalpha()) # True
```

```python
a = "te sting1 23"
b = "TES TING "
print(b.isupper())
print(a.islower())
```
```python
print(b.isupper()) # True
print(a.islower()) # True
```
````

---
title: Translation Tables
layout: center
level: 3
---

# Translation Tables
````md magic-move
```python{1|2|2-3|*}
a = "Hello Jay"
translation_table = str.maketrans('Jay', 'world!')
print("Translate a: ", a.translate(translation_table))
```
```python{*}
print("Translate a: ", a.translate(translation_table))
# Translate a: Hello world!
```
````
---
title: Case functions
layout: center
level: 3
---

# Case functions
````md magic-move
```python
a = "Bye WoRlD!"
print(a.upper())
print(a.lower())
print(a.casefold())
print(a.title())
print(a.capitalize())
print(a.swapcase())
```
```python{*}
print(a.upper()) # BYE WORLD!
print(a.lower()) # bye world!
print(a.casefold()) # bye world!
print(a.title()) # Bye World!
print(a.capitalize()) # Bye world!
print(a.swapcase()) # bYE wOrLd!
```
````
