# Micro Frontend Demo

This project demonstrates a micro frontend architecture using Module Federation in Webpack 5. It consists of a host application that loads chat and email applications dynamically. This will run locally, not deployed on any domain.

## Setup and Installation
**Install dependencies for all applications:**

- **cd host-app && npm install && npm start**
- **cd ../chat-app && npm install && npm start**
- **cd ../email-app && npm install && npm start**

### Applications
- **Host App** (Port 3000): Main shell application that manages routing and shared components
- **Chat App** (Port 3001): Chat micro frontend
- **Email App** (Port 3002): Email micro frontend

### Tech Stack
- React 18
- Webpack 5 with Module Federation
- React Router DOM
- Babel
- CSS Modules

### Key Features
- Dynamic loading of micro frontends
- Shared component library
- Centralized routing
- Consistent UI/UX across apps
- Scalable architecture
- Event Bus for communication between micro frontends (Not Added)