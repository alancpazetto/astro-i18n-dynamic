import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const lang = context.params.lang;

  // If you want to redirect to another language
  if (lang === 'pt-BR') {
    const pathName = context.url.pathname.replace('/pt-BR/', '');
    return context.redirect(`/pt-br/${pathName}`);
  }

  return next();
});
