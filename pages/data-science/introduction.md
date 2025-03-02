---
title: Rough classification of data
level: 1
layout: two-cols-header
transition: fade
---

# The couple of characteristics to reach clean data

::left::
<v-clicks depth="2">

- Validity
    - Data is in a expected format
    - Examples
        - "DD-MM-YYYY" is not how dates are stored its always "YYYY-MM-DD"
        - Emails are in the format local_address@domain (64 + 1 + 255 = 320)
- Accuracy
    - How representative the data is of the true values
    - Examples
        - Measuring equipment is mis-calibrated
        - Measuring the wrong statistic as a representative of another variable
</v-clicks>
::right::
<v-clicks depth="2">

- Completeness
    - Data needed is present at all rows
    - Examples
        - Data is null
- Consistency
    - Data in each row should be in the same format
    - Examples
        - Data in each row has inconsistencies
</v-clicks>
