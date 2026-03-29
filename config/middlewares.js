export default [
    "strapi::errors",
    {
      name: "strapi::security",
    },
    {
      name: "strapi::cors",
    },
    {
      name: "strapi::poweredBy",
    },
    {
      name: "strapi::logger",
    },
    {
      name: "strapi::query",
    },
    {
      name: "strapi::body",
    },
    {
      name: "strapi::session",
    },
    {
      name: "strapi::favicon",
    },
    {
      name: "strapi::public",
    },
    {
      name: "strapi::rateLimit",
      config: {
        interval: { min: 1 }, // 1 minute
        max: 1000, // max requests per IP
      },
    },
  ];