import { GridSection } from '../types';
import PlaceholderImage from '../assets/Placeholder.png';

export const gridSections: GridSection[] = [
  {
    layout: 'main',
    cards: [
      {
        id: 'career-transition-button',
        title: 'Career Transition',
        description: 'Where you can find the database of our placed learners.',
        imageUrl:
          'https://directus.crio.do/assets/e6957927-f24e-46df-9154-9d959c688ce7.webp',
        linkUrl: 'https://www.crio.do/placements/',
        buttonText: 'Click Here',
        identifier: 'Career Transition',
      },

      {
        id: 'placement-stats-button',
        title: 'Placement Stat Brochure',
        description:
          'With new stats, top alumni reviews and our top hiring partners.',
        imageUrl:
          'https://directus.crio.do/assets/583ef0db-0103-4756-af54-8a4bf48b254d.webp',
        buttonText: 'Click Here',
        identifier: 'Placement Stats Brochure',
        links: [
          {
            label: 'Overall Placement Report',
            url: 'https://drive.google.com/file/d/1vRcQjTHPHpYoZnfjF8fkhg6PIQJqVyHd/view?usp=sharing',
          },
          {
            label: 'Placement Stats Brochure',
            url: 'https://drive.google.com/file/d/1RVUDhaRJxaCQbnlBdOnMSaUD2oYb3816/view?usp=sharing',
          },
        ],
      },

      {
        id: 'google-reviews-button',
        title: 'Google Reviews',
        description: 'Where you can find all the Google Reviews in one place.',
        imageUrl:
          'https://directus.crio.do/assets/0ce18d4c-c7ad-4b25-b760-9c7a9e98e1bd.png',
        linkUrl:
          'https://sites.google.com/criodo.com/sales-resources/google-reviews',
        buttonText: 'Click Here',
        identifier: 'Google Reviews',
      },

      {
        id: 'linkedin-posts-button',
        title: 'LinkedIn Posts',
        description: "All learners' posted LinkedIn posts in one place.",
        imageUrl:
          'https://directus.crio.do/assets/9be7d44e-4963-4530-9f3d-86f4b52d7ac3.webp',
        linkUrl:
          'https://sites.google.com/criodo.com/sales-resources/linkedin-posts',
        buttonText: 'Click Here',
        identifier: 'LinkedIn Posts',
      },

      {
        id: 'featured-project-button',
        title: 'Featured Project',
        description: 'Check out this featured project for more insights.',
        imageUrl:
          'https://directus.crio.do/assets/dd38ee29-46ed-41ae-acdb-75ab39013526.webp',
        linkUrl: 'https://www.crio.do/projects/',
        buttonText: 'Explore Now',
        identifier: 'Featured Project',
      },
    ],
  },

  {
    layout: 'bottom',
    cards: [
      {
        id: 'sales-assets-button',
        title: 'Sales Assets',
        description:
          'With user message template and copy to clipboard feature.',
        imageUrl:
          'https://directus.crio.do/assets/face402c-4029-4130-9c7b-d470a1006348.webp',
        linkUrl:
          'https://sites.google.com/criodo.com/sales-resources/sales-assets-creatives',
        buttonText: 'Checkout',
        identifier: 'Sales Assets',
      },

      {
        id: 'roi-calculator',
        title: 'ROI Calculator',
        description:
          "Calculate learners' hike in salary and time to earn back the fee.",
        imageUrl:
          'https://directus.crio.do/assets/2700932b-2aa5-4a66-a72f-a4496842c0f0.webp',
        linkUrl: 'https://www.crio.do/roi-calculator',
        buttonText: 'Click Here',
        identifier: 'ROI Calculator',
      },

      {
        id: 'Video-Testimonials',
        title: 'Video Testimonials',
        description:
          'Collect and showcase real customer experiences through video testimonials',
        imageUrl: PlaceholderImage,
        linkUrl: 'https://crio-project.vercel.app/',
        buttonText: 'Click Here',
        identifier: 'Video Testimonials',
      },
    ],
  },
];
