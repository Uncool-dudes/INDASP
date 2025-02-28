---
title: Object Oriented
transition: fade
layout: cover
level: 1
---

# Object Oriented Programming

<!--
- How far have you covered in object oriented programming?
-->

---
title: Goal
level: 2
transition: slide-up
---

### Our aim will be to implement the following class diagram.

```mermaid
classDiagram
    class Vehicle {
        +String make
        +String model
        +int year
        +void start()
        +void stop()
    }

    class Car {
        +int doors
        +boolean hasAirConditioning
        +void honk()
    }

    class Boat {
        +float length
        +boolean hasSail
        +void anchor()
    }

    class Truck {
        +float cargoCapacity
        +boolean isFourWheelDrive
        +void loadCargo()
    }

    class Plane {
        +int wingspan
        +boolean isJet
        +void takeOff()
    }

    Vehicle <|-- Car
    Vehicle <|-- Boat
    Vehicle <|-- Truck
    Vehicle <|-- Plane
```
