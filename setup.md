# Prisma: Relational databases

> This did not work. See bottom

TypeScript, PostgreSQL

- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

## Setup

[Using Prisma with Neon](https://www.prisma.io/docs/guides/database/neon)

```bash
mkdir hello-prisma
cd hello-prisma
```

```bash
npm init -y
npm install prisma typescript ts-node @types/node --save-dev
```

```bash
npx tsc --init
```

```bash
npx prisma init
```

Results of `npx prisma init`

```bash
klequis@klequis:~/d/learn/prisma/hello-prisma$ npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

Put connection string in .env

- Neon had very specific instructions on its Dashboard for both `prisma.schema` and `.env`.

Use Prisma Migrate

```bash
npx prisma migrate dev --name init
# use
npx prisma migrate dev --name init
```

Here is the response - SUCCESS

```bash
klequis@klequis:~/d/learn/prisma/hello-prisma-neon$ npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "mlife", schema "public" at "ep-young-butterfly-31098502.us-west-2.aws.neon.tech"

✔ Enter a name for the new migration: … migration01
Applying migration `20231201214649_migration01`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20231201214649_migration01/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (v5.6.0) to ./node_modules/@prisma/client in 94ms

```

Stopped at end of section: "How to use Neon's connection pooling"
