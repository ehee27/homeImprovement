1. install next project files-typescript
2. install prisma as a dev dep
3. run the script to create dir and schema
   \*\*\* npx prisma init --datasource-provider mongodb
4. Inside our Prisma file, create the User & Project models
5. Set the db connection string in .env
6. Create utils fold and prisma.ts with PrismaClient() (connect with actions file later)
7. run npx prisma generate (mongo should be talking to app now)

8. Create the basic components while AND DEFINE types (Form, Input, Button)
   \*\*\*\* separating our form elements so we can reuse
9. Create types dir with out inputTypes
