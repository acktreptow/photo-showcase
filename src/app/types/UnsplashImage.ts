export type UnsplashImage = {
  alt_description: string;
  description: string;
  links: {
    download: string;
  };
  location: {
    city: string;
    country: string;
  };
  urls: {
    regular: string;
  };
  user: {
    name: string;
    username: string;
    portfolio_url: string;
  };
};
