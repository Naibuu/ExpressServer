<div align="center">
  <h1>⚡ TypeScript + Express Server Setup</h1>
  <img alt="Typescript" src="https://raw.githubusercontent.com/intergrav/devins-badges/1aec26abb75544baec37249f42008b2fcc0e731f/assets/cozy/built-with/typescript_vector.svg" />
  <img alt="GitHub" src="https://raw.githubusercontent.com/intergrav/devins-badges/1aec26abb75544baec37249f42008b2fcc0e731f/assets/cozy/available/github_vector.svg" />
</div>

## 📝 Table of Contents

-   [Requirements](#⚠️-requirements)
-   [Getting Started](#⚡️-getting-started)
-   [Usage](#✨-usage)
-   [Building for Production](#🚀-building-for-production)
-   [Deploying to Vercel](#▲-deploying-to-vercel)
-   [License](#license)

## ⚠️ Requirements

To run and build the project correctly, you must have Node.js 16 or above installed on your machine. You can download the latest version of Node.js from the official website: [Node.js Downloads](https://nodejs.org)

## ⚡️ Getting Started

1. Clone the repository to your local machine:

```bash
$ git clone https://github.com/Naibuu/ExpressServer.git
```

2. Navigate to the project directory:

```bash
$ cd ExpressServer
```

3. Install the required dependencies using a package manager like pnpm, npm or yarn:

```bash
$ pnpm install
# or
$ npm install
# or
$ yarn install
```

## ✨ Usage

To start the development server, run the following command:

```bash
$ pnpm dev
# or
$ npm run dev
# or
$ yarn dev
```

This will start the server using nodemon, which automatically restarts the server whenever a file gets updated.

You can access the server at http://localhost:3000. You can modify the port inside the `.env` file.

## 🚀 Building for Production

To build the project for production, run the following command:

```bash
$ pnpm build
# or
$ npm run build
# or
$ yarn build
```

This will compile the TypeScript code and output the compiled JavaScript files to the `dist` directory.

You can then run the production server using the following command:

```bash
$ pnpm start
# or
$ npm start
# or
$ yarn start
```

## ▲ Deploying to Vercel

If you want to deploy the server to <a href="https://vercel.com/">Vercel</a>, you need to create a config like this one for example:

```json
{
    "name": "server",
    "version": 2,
    "public": true,
    "builds": [
        {
            "src": "/src/index.ts",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/src/index.ts"
        }
    ]
}
```

## License

This project is licensed under the <a href="/LICENSE">MIT</a> License.
