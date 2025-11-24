import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://test-blog.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('無題のスプレッドシート'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('test-blog.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
