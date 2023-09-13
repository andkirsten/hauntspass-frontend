export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.hauntspass.ignorelist.com"
    : "http://localhost:3001";
