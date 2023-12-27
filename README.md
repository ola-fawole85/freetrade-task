# freetrade-task

# Overview
Trade App is a web application designed to provide users with a portfolio performance measure called Money Weighted Rate of Return (MWRR). This application allows users to view their portfolio's performance for multiple time periods through a RESTful API.


# Structure
free trade-app/
│
├── src/
│   ├── api/
│   │   └── mwrrAPI.ts
│   ├── services/
│   │   └── mwrrService.ts
│   ├── models/
│   │   └── user.ts
│   └── utils/
│       └── calculations.ts
│
├── tests/
│   ├── unit/
│   │   └── mwrrService.test.ts
│   ├── integration/
│   │   └── mwrrAPI.test.ts
│   ├── acceptance/
│   │   └── tradeApp.test.ts
│   └── mobile/
│       ├── app/
│       │   └── pages/
│       │       ├── loginPage.ts
│       │       ├── tradingPage.ts
│       │       └── ... (other pages)
│       ├── features/
│       │   ├── limitOrders.feature
│       │  
│       │   
│       ├── step-definitions/
│       │   ├── loginSteps.ts
│       │   ├── mwrrSteps.ts
│       │   └── ... (other step definitions)
│       └── config/
│           ├── ios.conf.ts
│           ├── android.conf.ts
│           └── wdio.conf.ts
│
├── wdio.conf.js
├── tsconfig.json
└── package.json

# Installation

# Prerequisites
. Node.js (version 18 or later)
. npm (usually comes with Node.js)

# Steps
 Clone the Repository:  
      - git clone [repository-url]
      - cd freetrade-task

# Install Dependencies
 . npm install
 


