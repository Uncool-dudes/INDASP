---
title: List methods
transition: fade
layout: center
level: 2
---

# Lists

- Slicing
- Map
- Filtering

---
title: Slicing
layout: center
level: 3
---

````md magic-move
```python
[1,2,3,4,5] -> [1,2,3]
```

```python{1-2|3|4|5|*}
# The slice object
slice_name : slice = slice(stop)
slice_name : slice = slice(start,stop)
slice_name : slice = slice(start,stop,step)
array[(index|:)]
array[(:)(stop)]
array[(start)(:)]
array[(:)(:)(step)]
```

```python
a = [1,2,3,4,5]
b: slice = slice(3)
b: slice = slice(0,3)
b: slice = slice(0,3,1)
print(a[:3]) # [1,2,3]
```

```python
[1,2,3,4,5] -> [1,3,5]
```

```python
a = [1,2,3,4,5]
b: slice = slice(0,5,2)
print(a[::2])
```

```python
[1,2,3,4,5] -> [5,4,3,2,1]
```

```python
a = [1,2,3,4,5]
b: slice = slice(0,5,-1)
print(a[::-1])
```

```python
[1,2,3,4,5] -> [1,2,3,4]
```

```python
a = [1,2,3,4,5]
b: slice = slice(0,5-1)
print(a[-1])
```
````
<!--
- Lets try getting the first three elements of an array
- [click] In python we have the slice class that when we create a object of we can use to select based off three parameters start, stop and step. When passed only one argument it takes this as the stop so everything including that index are outputted as a new array.
 -->

---
title: Map Function
layout: center
level: 3
---

# Map Function

````md magic-move
```python
a = [1,2,3,5,3,2,1]
```

```python
a = [2,4,6,10,6,4,2]
```

```md
element in a -> 2 * element in a
```

```python
a = [2,4,6,10,6,4,2]
double = lamda x : x * 2
```

```python
a = [2,4,6,10,6,4,2]
double = lamda x : x * 2
print(list(map(double,a)))
```

```python
map(function, array) -> map object
```
````

<!--
- Assume we have an array
- [click] Now we are going to double every element in an array
- [click] This would be the mock pseudocode
- [click] Now lets see how the map function performs this and some weird quirks
- [click] You must always typecast the returned object from the map function
 -->
---
title: Filtering
layout: center
level: 3
---

# Filtering
takes a function that returns a boolean and returns all the elements that pass the boolean check in a filter object.
````md magic-move

```python
a = ['Alice', 'Andy', 'Bob', 'Charlie']
begins_with_a = lambda x: x.casefold().startswith('a')
```

```python{*|1|1-2}
filtered = filter(begins_with_a, a) # Returns a filter object
print(list(filtered)) # ['Alice','Andy']
```
````
<!--
- Here's a simple example with names
- [click] We define a lambda function to check if a name starts with 'a' (case insensitive)
- [click] Just like map, filter returns a special object that needs typecasting to list
-->
