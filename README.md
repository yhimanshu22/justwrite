## Backend

### Database Setup

- **Hosting**: The backend database is hosted on [Render](https://render.com/). Initially attempted with Avian but encountered migration errors with Prisma.

### Prisma Accelerate

- **Connection Pooling**: Utilizing Prisma Accelerate for optimized database connection pooling.

### Configuration

- **Database URLs**:
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

1. **Database Migration**: Use `prisma migrate` for managing schema migrations after any schema changes.
  
   ```bash
   npx prisma migrate dev --name initial --preview-feature
