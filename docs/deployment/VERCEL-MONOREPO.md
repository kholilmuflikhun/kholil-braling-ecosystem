# Vercel Monorepo Deployment

Create four Vercel Projects linked to this repository:

| Project | Root Directory |
|---|---|
| kholil-growth-os | apps/growth-os |
| braling-production-pos | apps/production-pos |
| kholil-personal-website | apps/personal-website |
| braling-ecommerce | apps/braling-ecommerce |

Enable the monorepo/workspace install behavior. Configure each project with its own environment variables and build settings. Use separate Development, Preview, and Production database environments. Do not deploy until the repository lockfile exists and CI/build checks pass.
