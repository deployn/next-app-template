This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) is a command line utility which helps you making meaningful and standard commit messages. It uses a series of prompts to generate a well formatted commit message.

To commit changes using Commitizen, run:

```bash
npm run commit
# or
yarn commit
# or
pnpm commit
```

## Semantic Release

[Semantic Release](https://github.com/semantic-release/semantic-release) automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.

The version number is automatically determined based on Commitizen’s structured commit messages. This ensures that version numbers are bumped in a semantic way (major for breaking changes, minor for new features, patch for bug fixes).

This project employs [GitHub Actions](https://github.com/features/actions) for automated releases, leveraging the power of Semantic Release.

The GitHub Actions workflow is set up to trigger a new Semantic Release whenever changes are pushed to the main branch. This means that every time you merge a pull request or push directly to main, the project version will be automatically bumped based on the commit messages, the changelog will be updated, and a new release will be created and published to GitHub.

The workflow configuration for Semantic Release can be found in `.github/workflows/release.yml`.

Please ensure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard, as this is what Semantic Release uses to determine the version bumps. If you’re not confident writing these by hand, use Commitizen, which will guide you through generating a properly formatted commit message.
