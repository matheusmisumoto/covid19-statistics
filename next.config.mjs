import { env } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    basePath: env.APP_BASE_PATH || '',
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
       '@mui/styled-engine': '@mui/styled-engine-sc',
       };
       return config;
     }
  }
   
  export default nextConfig