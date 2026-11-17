# Kanban Console · Web

Frontend Next.js do board e console dos workers.

```sh
npm install
npm run dev
npm run build
```

O cliente usa `/api/...` relativo por padrão. O rewrite Next.js encaminha para `http://api:3001` no Docker/Umbrel; em desenvolvimento local configure `API_INTERNAL_URL=http://localhost:3001`. `NEXT_PUBLIC_API_URL` é um override opcional da URL usada pelo navegador (por exemplo, para uma API externa).
