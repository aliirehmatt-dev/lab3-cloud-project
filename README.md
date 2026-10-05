# Small Shop Inventory - Lab 03 (CNS 303)

Simple project used for PaaS deployment on Netlify via GitHub.

```
lab3-cloud-project/
├── frontend/   -> static website (this is what Netlify deploys)
│   ├── index.html
│   ├── style.css
│   └── script.js
└── backend/    -> small Express API (run locally)
    ├── server.js
    └── package.json
```

## Netlify settings
- Base directory: (leave empty)
- Build command: (leave empty)
- Publish directory: `frontend`

## Run backend locally
```
cd backend
npm install
npm start
```
Open http://localhost:3000/api/products
