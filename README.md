# Photo Showcase

Welcome to the Photo Showcase! A tour through various Next.js fetching/caching strategies available in the React framework, showcased through Unsplash photos.

To view the showcases, click [here](https://photo-showcase-theta.vercel.app/)!

## Technologies Used

- Next.js (Next.js 14 App Router)
- TypeScript
- Tailwind CSS
- Unsplash API

## Project Overview

Whether it's working on gaming "bullshots", thumbnails for my YT channel or just general editing of usual nature-focused photos, I love working with images.

That's why the Unsplash API was the perfect choice for this project! Not only could I could learn from all the endless refreshing of Unsplash photos to improve my own, but it would also help me further improve my Next.js skills. Especially working with the more backend parts of the framework like Next API route handlers.

The app also uses TypeScript for clean code and Tailwind CSS to display the Unsplash photos and their data in very different ways, depending on the page and device being used.

### Homepage

The homepage serves as the landing page of the store, providing navigation to other sections of the website as well as some starter information about each of them.

### Static Page

The static page fetches and caches the Unsplash API data at build time so the same picture will remain even if there is a page refresh.

### Dynamic Page

The dynamic page doesn't cache the data fetched from the Unsplash API, so there will always be a new Unsplash photo with every page refresh.

### Incremental Static Regeneration Page

This is a hybrid of the static and dynamic methods. The page is generated statically, but it can regenerate after 5 seconds to fetch a new photo from the Unsplash API.

### Dogs/topics Page

This page uses the topic parameter to fetch 12 related from the Unsplash API. While the dog photos are static because they were fetched/cached at build time, other topics are dynamic.

### Search Page

The only page that fetches data client-side because user input is needed to render photos. However, the GET request to the Unsplash API is sent via a server-based Next.js API route handler. Otherwise credentials would leak.

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

If you’d like to contribute, have questions, or want to provide feedback, please reach out to me at [alex@treptow.dev](mailto:alex@treptow.dev)

## Future Enhancements

There's no plans for any significant updates unless someone contributes with a great feature that I didn't think of.

## License

This project is licensed under the MIT License which is available [here](https://opensource.org/license/MIT).
