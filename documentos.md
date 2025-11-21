pnpm dlx create-next-app@16
pnpm install -D prettier@3.6.2 prettier-puglin-tailwindcss@0.7.1

.prettierrc
{"plugin: [prettier-puglin-tailwindcss]"}

pnpm add prisma@6.18.0
npx prisma init --datasource-provider PostgreSQL
npx prisma format
pnpm install dotenv@17.2.3
import "dotenv/config";
npx prisma format
npx prisma generate
npx prisma db push
pnpm add -D tsx@4.20.6
seed: "tsxprisma/seed.ts",
pnpm install @prisma/cliente@6.19.0
npx prisma db seed
git add .
git commit -m ""
git push -u origin main
npx shadcn@3.5.0 init
npx shadcn@3.5.0 add button
npx shadcn@latest add navigation-menu
