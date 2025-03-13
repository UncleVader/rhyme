This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- First, ensure that you have installed Node version >=18
- Open terminal and go to the project root folder where run command `npm i`
- If all is good run next command `npm run build`
- As a result you'll get folder `./out` where is placed compiled bundle, which is ready for deploying as a normal static site
- Note: if you are going to host final bundle using nested path, like `https://mysite.com/subfolder/rhyme` you have to update `next.config.mjs` file and set `basePath: '/subfolder/rhyme'`   
- Alternatively you can run it locally in dev mode by running the command `npm run dev`, it will run local web server on port 3000 and the site will be available by address http://localhost:3000
  
