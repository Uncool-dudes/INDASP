---
background: https://cover.sli.dev
class: text-center
info: |
  ## Data Cleaning Basics in Python
  Presentation on fundamental techniques for preparing data for analysis
transition: fade
title: Data Cleaning Basics in Python
---

# Data Cleaning Basics in Python

Essential techniques for preparing messy data for analysis

---
level: 2
layout: two-cols
transition: fade
---

# Why Data Cleaning?

<v-clicks>

- Raw data is rarely analysis-ready
- 80% of data science is cleaning/preparation
- Ensures accurate and reliable results
- Prevents "garbage in, garbage out"
- Makes analysis reproducible

</v-clicks>

::right::

---
level: 2
layout: cover
transition: fade
---

# Python Libraries for Data Cleaning

<v-clicks>

- **Pandas**: The workhorse for data manipulation
- **NumPy**: For numerical operations
- **Matplotlib/Seaborn**: For visualizing data issues
- **Scikit-learn**: For imputation and preprocessing
- **Regular Expressions**: For text cleaning

</v-clicks>

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.impute import SimpleImputer
import re
```

---
level: 2
layout: default
transition: fade
---

# Common Data Problems

<v-clicks>

- Missing values
- Duplicate records
- Inconsistent formatting
- Outliers
- Data type issues
- Incorrect values
- String encoding problems

</v-clicks>

---
title: Data input
level: 2
transition: fade
---

# Reading Data
````md magic-move
```python {4-5|7-8|all}
# Multiple file formats supported
# Choose the right reader for your data source

# CSV files
df = pd.read_csv('data.csv')

# Excel files
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')

# Other formats: JSON, SQL, HTML, etc.
```

```python
df.head()           # First 5 rows
df.info()           # Data types and non-null values
df.describe()       # Statistical summary
df.shape            # Dimensions (rows, columns)
```
````


---
layout: cover
level: 2
transition: fade
---

# Handling Missing Values

<v-clicks>

- Identify missing values
- Decide on a strategy:
  - Remove rows/columns
  - Impute with mean/median/mode
  - Use advanced imputation
  - Fill with constants

</v-clicks>

---
title: Syntax for handling missing values
level: 3
layout: center
---
````md magic-move

```python
# Checking for missing values
df.isna().sum()
df.isnull().mean()  # % missing
```

```python {*}
# Drop missing values
df_clean = df.dropna()
df_clean = df.dropna(subset=['important_column'])
```

```python {*|1-2|*}
# Fill with statistics
df['age'].fillna(df['age'].mean(), inplace=True)
df['category'].fillna(df['category'].mode()[0], inplace=True)
```

```python {*|2|3-4|*}
# More advanced imputation
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy='mean')
df[['num1', 'num2']] = imputer.fit_transform(df[['num1', 'num2']])
```
````

---
title: Handling Duplicates
level: 2
layout: cover
---

# Handling Duplicates

````md magic-move
```python
# Check for duplicates
df.duplicated().sum()
```

```python
# Get all duplicate rows
df[df.duplicated()]
```

```python
# Remove duplicates
df_clean = df.drop_duplicates()
```

```python
# Remove duplicates based on specific columns
df_clean = df.drop_duplicates(subset=['ID', 'Name'])
```
````

---
layout: two-cols
---

# Data Type Conversion

<v-clicks>

- Wrong data types cause errors in analysis
- Common conversions:
  - String to numeric
  - String to datetime
  - Categorical encoding
  - Type casting

</v-clicks>

::right::
````md magic-move
```python
# Check data types
df.dtypes
```

```python
# Convert to numeric (handling errors)
df['income'] = pd.to_numeric(df['income'], errors='coerce')
```

```python
# Convert to datetime
df['date'] = pd.to_datetime(df['date'],
                           errors='coerce',
                           format='%Y-%m-%d')
```

```python
# Convert to categorical
df['category'] = df['category'].astype('category')
```

```python
# One-hot encoding
df_encoded = pd.get_dummies(df, columns=['category'])
```
````
---

# Handling Outliers
````md magic-move
```python {*|1-4|*}
# Visualize to detect outliers
plt.figure(figsize=(10, 6))
sns.boxplot(x=df['column_name'])
plt.show()
```

```python {*|1|2-3|4|5-6|7|*}
# Remove outliers using IQR method
Q1 = df['column_name'].quantile(0.25)
Q3 = df['column_name'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
df_clean = df[(df['column_name'] >= lower_bound) & (df['column_name'] <= upper_bound)]
```

```python {*|1-2|3|4-5|6|*}
# Cap outliers (Winsorization)
lower_bound = df['column_name'].quantile(0.05)
upper_bound = df['column_name'].quantile(0.95)
df['column_name_capped'] = df['column_name'].copy()
df.loc[df['column_name_capped'] < lower_bound, 'column_name_capped'] = lower_bound
df.loc[df['column_name_capped'] > upper_bound, 'column_name_capped'] = upper_bound
```
````
---
layout: two-cols
---

# String Cleaning

<v-clicks>

- Common string issues:
  - Inconsistent case
  - Extra whitespace
  - Special characters
  - Inconsistent formatting
  - Typos and misspellings

</v-clicks>

::right::
````md magic-move
```python {*|1-3|*}
# Converting case
df['name'] = df['name'].str.lower()
df['name'] = df['name'].str.title()
```

```python {*|1-2|*}
# Removing whitespace
df['name'] = df['name'].str.strip()
```

```python {*|1-2|*}
# Replacing values
df['category'] = df['category'].replace('Electornic', 'Electronic')
```

```python {*|1-2|*}
# Using regular expressions
df['phone'] = df['phone'].str.replace(r'[^\d]', '', regex=True)
```

```python {*|1-2|*}
# String extraction
df['zip'] = df['address'].str.extract(r'(\d{5})')
```
````
---

# Feature Engineering
````md magic-move
```python {*|1-4|*}
# Create new features from datetime
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.day_name()
```

```python {*|1-3|*}
# Create new features from text
df['name_length'] = df['name'].str.len()
df['has_www'] = df['website'].str.contains('www', regex=False).astype(int)
```

```python {*|1-3|*}
# Mathematical transformations
df['log_income'] = np.log(df['income'])
df['income_squared'] = df['income'] ** 2
```

```python {*|1-3|*}
# Binning continuous variables
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 50, 65, 100],
                        labels=['<18', '18-35', '36-50', '51-65', '65+'])
```
````
---
layout: two-cols
---

# Scaling and Normalization

<v-clicks>

- Important for machine learning
- Common methods:
  - Min-Max Scaling
  - Standard Scaling (z-score)
  - Robust Scaling
  - Log Transformation

</v-clicks>

::right::
````md magic-move
```python {*|1|*}
from sklearn.preprocessing import MinMaxScaler, StandardScaler
```

```python {*|1-3|*}
# Min-Max Scaling (0 to 1)
scaler = MinMaxScaler()
df[['height', 'weight']] = scaler.fit_transform(df[['height', 'weight']])
```

```python {*|1-3|*}
# Standard Scaling (mean=0, std=1)
scaler = StandardScaler()
df[['height', 'weight']] = scaler.fit_transform(df[['height', 'weight']])
```

```python {*|1-2|*}
# Log Transformation (for skewed data)
df['income_log'] = np.log1p(df['income'])  # log(1+x)
```
````
---

# Putting It All Together: A Data Cleaning Pipeline

```python {1|3|5-7|9-11|13-14|16-17|19-21|all}
def clean_data(df):
    # Make a copy to avoid modifying the original
    df_clean = df.copy()

    # Convert data types
    df_clean['income'] = pd.to_numeric(df_clean['income'], errors='coerce')
    df_clean['date'] = pd.to_datetime(df_clean['date'], errors='coerce')

    # Handle missing values
    df_clean['age'].fillna(df_clean['age'].median(), inplace=True)
    df_clean['category'].fillna('Unknown', inplace=True)

    # Remove duplicates
    df_clean = df_clean.drop_duplicates()

    # Fix string inconsistencies
    df_clean['name'] = df_clean['name'].str.strip().str.title()

    # Create new features
    df_clean['age_group'] = pd.cut(df_clean['age'], bins=[0, 18, 35, 50, 65, 100],
                                  labels=['<18', '18-35', '36-50', '51-65', '65+'])

    return df_clean
```
