# Project state
Last updated: 2026-09-15
## Works
A live Next.js site (App Router, TypeScript, plain CSS) is deployed on Vercel at ai-workshop-nine-bay.vercel.app. A Supabase project exists and is linked to the repo.

## Broken or flaky
Nothing app-specific yet. Sign-up, login, tasks, and skill tags are not built. Supabase is not yet wired into the site — no tables, no auth calls, no data flowing.

## Environment notes
Stack is Next.js (App Router), TypeScript, plain CSS, Supabase, deployed on Vercel. Supabase project is created and linked but currently unused by the app.

## Next session
Start Slice 1 from roadmap.md: sign up and log in, and nothing else. Wire Supabase Auth into the existing site for email/password sign-up and login, with a session that persists across a closed tab.
