const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.daybreakhaunts.ignorelist.com'
  : 'http://localhost:3001';

export default baseUrl;
