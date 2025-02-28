---
title: Importing packages
level: 2
layout: cover
transition: slide-left
---

# Importing packages

````md magic-move
```python{*}
from pandas import read_csv
read_csv()
```

```python{*}
import pandas
pandas.read_csv()
```

```python{*}
import pandas as pd
pd.read_csv()
```
````

<!--
Each method is used depending on the number of exported members from a package.
- We can import specific items from a package allowing us to use it directly.
- [click] We can import all exported members in a package, but must prefix it with the package name for the imported members to resolve.
- [click] We can make the previous option more succinct by utilizing import *aliases*.
 -->
