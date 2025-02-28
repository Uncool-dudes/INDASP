---
title: Function Definitions
level: 2
layout: center
transition: fade
class: px-20
---

# Function Definition
Functions have two ways to be defined and we fill take a bit of a detour to understand why there are these two ways.
But all functions have—

<div class='text-center'>
Argument list & Function body
</div>
<br>
````md magic-move
```python{*|1|2}
def function_name( arguments ):
    # stuff...
    return modified_arguments
```
```python
function_name = lambda arguments : something(arguments)
```
````
<v-click>
These functions are also called anonymous functions as the function name is based off a variable assignment and not truly a function name like `def`.
</v-click>

<!--
- [click]
    - Function declarations begin with `def`.
    - Functions must have a name should be in snake case(stylistic).
    - There are some naming conventions we will talk about regarding function arguments.
- [click] There is no recommendation regarding function body length though this might depend on organizational guidelines
-->
