# Prisma commands

Set up a new Prisma project

```bash
$ prisma init
```

Generate artifacts (e.g. Prisma Client)

```bash
$ prisma generate
```

Browse your data

```bash
$ prisma studio
```

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)

- See [Data loss when resetting the database](https://www.prisma.io/docs/concepts/components/prisma-migrate/prisma-migrate-limitations-issues#data-loss-when-resetting-database)
- `migrate dev` will do a reset when migrate detects drift in the database or a migration history conflict.

```bash
$ prisma migrate dev
$ prisma migrate reset
```

Pull the schema from an existing database, updating the Prisma schema

```bash
$ prisma db pull
```

Push the Prisma schema state to the database

```bash
$ prisma db push
```

Validate your Prisma schema

```bash
$ prisma validate
```

Format your Prisma schema

- Formats the Prisma schema file, which includes validating, formatting, and persisting the schema.

```bash
$ prisma format
```

Display Prisma version info

```bash
$ prisma version
```

Display Prisma debug info

```bash
$ prisma debug
```

```

```
