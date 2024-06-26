# Photo Showcase

Welcome to the Photo Showcase! This project explores various Next.js fetching and caching strategies, showcased through Unsplash photos.

To view the different showcases, click [here](https://photo-showcase-theta.vercel.app/)!

## Technologies Used

- Next.js (Next.js 14 App Router)
- TypeScript
- Tailwind CSS
- Unsplash API

## Project Overview

I love working with images, whether it's gaming "bullshots," thumbnails for my YouTube channel, or general nature-focused photo editing. The Unsplash API was therefore the perfect choice for this project because it helped me achieve both of my goals:

1. I learned new techniques from the myriad Unsplash photos I viewed while making the showcases, which I can now incorporate into my own.
2. My Next.js skills significantly improved by implementing various fetching and caching techniques on each page, especially the final page where I gained experience with backend aspects like Next API route handlers.

### Homepage

The homepage serves as the landing page, providing navigation to other sections and some introductory information about each of them.

### Static Page

The static page fetches and caches the Unsplash API data at build time so the same picture will remain even if there is a page refresh.

### Dynamic Page

The dynamic page doesn't cache the data fetched from the Unsplash API, so there will always be a new Unsplash photo with every page refresh.

### Incremental Static Regeneration Page

This is a hybrid of the static and dynamic methods. The page is generated statically, but it can regenerate after 5 seconds to fetch a new photo from the Unsplash API.

### Dogs/topics Page

This page uses the topic parameter to fetch 12 related from the Unsplash API. While the dog photos are static because they were fetched/cached at build time, other topics are dynamic. These are fetched/rendered on first access, then cached for subsequent visits (photos won't change on refresh).

### Search Page

The only page that fetches data client-side because user input is needed to render photos. However, the GET request to the Unsplash API is sent via a server-based Next.js API route handler. Otherwise my credentials granting Unsplash access would leak in the page source of your device (the client).

## Installation

To run the project locally, follow these steps:

1. Clone the repository (for Git): `git clone https://github.com/acktreptow/photo-showcase.git`
2. Navigate to the project directory: `cd photo-showcase`
3. Type `npm install` into the command line to ensure all dependencies are installed
4. Type `npm run dev` into the command line to view it in your preferred browser

## Contributing

Contributions are welcome! To do so, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Contact

If you’d like to contribute, have questions, or want to provide feedback, please reach out to me at [alex@treptow.dev](mailto:alex@treptow.dev).

## Future Enhancements

There are no plans for significant updates unless someone contributes a great feature that I hadn't considered.

## License

This project is licensed under the MIT License which is available [here](https://opensource.org/license/MIT).
