# Overview

Welcome to my collection of notes covering essential topics for software development and system design.

This GitBook serves as a structured knowledge base, helping with quick revisions and deep dives into important concepts.

## Quick Reference: Mermaid Diagrams

### Flowcharts

```
graph TD;

  A[Rectangle] --> B(Rounded)
  B --> C([Stadium])
  C --> D((Circle))
  D --> E{{Hexagon}}
  E --> F[/Parallelogram/]
  F --> G{Decision}
  G -->|Yes| H[/Trapezoid/]
  G -->|No| I[\Alternate Trapezoid/]
```

```mermaid
graph TD;

  A[Rectangle] --> B(Rounded)
  B --> C([Stadium])
  C --> D((Circle))
  D --> E{{Hexagon}}
  E --> F[/Parallelogram/]
  F --> G{Decision}
  G -->|Yes| H[/Trapezoid/]
  G -->|No| I[\Alternate Trapezoid/]
```



```mermaid
graph TD;

  A[Rectangle] --> B(Rounded)
  B --> C([Stadium])
  C --> D((Circle))
  D --> E{{Hexagon}}
  E --> F[/Parallelogram/]
  F --> G{Decision}
  G -->|Yes| H[/Trapezoid/]
  G -->|No| I[\Alternate Trapezoid/]
```

### ER Diagrams

```
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ITEM : contains


    USER {
      id number
      name string
      email string
    }

    ORDER {
      id number
      date date
      itemIds number[]
    }

    ITEM {
      id number
      name string
      inStock boolean
    }
```

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ ITEM : contains


    USER {
      id number
      name string
      email string
    }

    ORDER {
      id number
      date date
      itemIds number[]
    }

    ITEM {
      id number
      name string
      inStock boolean
    }
```

### System Design Architecture

```mermaid
graph TD;

  subgraph User[User Requests]
    A[Client] -->|Sends Request| B[Load Balancer]
  end

  subgraph Backend[Backend System]
    B -->|Distributes Load| C[API Gateway]

    subgraph Services[Microservices]
      C --> D[Auth Service]
      C --> E[Order Service]
      C --> F[Payment Service]
    end

    E -.->|Fetch Data| G[Database]
    F ==> H[Payment Gateway]
  end

  %% Styling Nodes
  classDef blackText color:#000000

  style User fill:#f9f9f912,stroke:#333,stroke-width:2px
  style Backend fill:#e3f2fd12,stroke:#1565c0,stroke-width:2px
  style Services fill:#bbdefb12,stroke:#1e88e5,stroke-width:1px
  style A fill:#fff3e0,stroke:#ff9800
  style B fill:#ffcc80,stroke:#fb8c00
  style C fill:#ffe082,stroke:#ffb300
  style D fill:#c8e6c9,stroke:#43a047
  style E fill:#b3e5fc,stroke:#039be5
  style F fill:#ffccbc,stroke:#d84315
  style G fill:#d1c4e9,stroke:#512da8
  style H fill:#f48fb1,stroke:#d81b60

  class A,B,C,D,E,F,G,H blackText;

```

### Sequence Diagrams

```
sequenceDiagram
    autonumber

    participant User as 🧑 User
    participant SP as 🖥️ Service Provider (SP)
    participant Google as 🔐 Google IdP (Identity Provider)

    User->>SP: 🔗 Access Protected Resource
    SP->>User: 🔀 Redirect to IdP for Authentication <br> <span style="color:blue"> (SAML Request)</span>
    Note right of User: Browser redirects to Google IdP
    User->>Google: 🚀 Send SAML Authentication Request
    Google->>User: 🛑 Prompt for Login (if not logged in)
    User->>Google: 🔑 Provide Credentials
    Google->>Google: ✅ Authenticate User
    Google-->>User: 🔄 Redirect Back with SAML Response <br> <span style="color:green"> (Signed Assertion)</span>
    User->>SP: 📜 Send SAML Response
    SP->>SP: 🔍 Validate SAML Assertion
    alt Validation Successful
        SP->>User: ✅ Access Granted 🎉
    else Validation Failed
        SP->>User: ❌ Authentication Failed
    end


```

```mermaid
sequenceDiagram
    autonumber

    participant User as 🧑 User
    participant SP as 🖥️ Service Provider (SP)
    participant Google as 🔐 Google IdP (Identity Provider)

    User->>SP: 🔗 Access Protected Resource
    SP->>User: 🔀 Redirect to IdP for Authentication <br> <span style="color:blue"> (SAML Request)</span>
    Note right of User: Browser redirects to Google IdP
    User->>Google: 🚀 Send SAML Authentication Request
    Google->>User: 🛑 Prompt for Login (if not logged in)
    User->>Google: 🔑 Provide Credentials
    Google->>Google: ✅ Authenticate User
    Google-->>User: 🔄 Redirect Back with SAML Response (Signed Assertion)
    User->>SP: 📜 Send SAML Response
    SP->>SP: 🔍 Validate SAML Assertion
    alt Validation Successful
        SP->>User: ✅ Access Granted 🎉
    else Validation Failed
        SP->>User: ❌ Authentication Failed
    end


```

## Data Structures

### Linked List

```
graph LR
    A[1] --> B[2]
    B --> C[3]
    C --> D[4]
    D --> E[null]
```

```mermaid
graph LR
    A[1] --> B[2]
    B --> C[3]
    C --> D[4]
    D --> E[null]
```

### Binary Trees

```
graph TD
    A[Root: 10]
    A --> B[Left: 5]
    A --> C[Right: 15]
    B --> D[Left: 2]
    B --> E[Right: 7]
    C --> F[Left: 12]
    C --> G[Right: 18]
```

```mermaid
graph TD
    A[Root: 10]
    A --> B[Left: 5]
    A --> C[Right: 15]
    B --> D[Left: 2]
    B --> E[Right: 7]
    C --> F[Left: 12]
    C --> G[Right: 18]
```

### Graphs

```mermaid
graph TD
    A --> B
    A --> C
    B --> D
    C --> D
    C --> E
    D --> F
    E --> F

```

```
graph TD
    A --> B
    A --> C
    B --> D
    C --> D
    C --> E
    D --> F
    E --> F

```
