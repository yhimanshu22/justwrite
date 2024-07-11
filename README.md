
   
## Backend

Check the app: [JustWrite](https://justwrite-m2b91t5fl-yhimanshu220456.vercel.app/signup)

### What to do in the Future

1. Logout route
2. Dashboard Implementation
3. Authentication using Google
4. Search Functionality
5. Integrate AI for writing blogs

### Database Setup

- Hosting: The backend database is hosted on [Render](https://render.com/). Initially attempted with Avian but encountered migration errors with Prisma.

### Prisma Accelerate

- Connection Pooling: Utilizing Prisma Accelerate for optimized database connection pooling.

### Configuration

- Database URLs:
  - Prisma Accelerate URL: Configure in `wrangler.toml`.
    ```toml
    # wrangler.toml
    prisma_accelerate_url = "<your_prisma_accelerate_url>"
    ```
  - Render URL: Store in `.env` file for local and deployment configurations.
    ```dotenv
    # .env
    DATABASE_URL="<your_render_database_url>"
    ```

### Deployment Steps

1. Database Migration: Use `prisma migrate` for managing schema migrations after any schema changes.
   
   ```bash
   npx prisma migrate dev --name initial
2. sma Client Generation:
   
   ```bash
   npx prisma generate --no-engine

3. Deploy to cloudflare: Use `prisma migrate` for managing schema migrations after any schema changes.
   
   ```bash
   npm run deploy

What Features I Added:

1.logo font change  
2.changes white to dark theme  
