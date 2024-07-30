import { v4 as uuidv4 } from 'uuid';
// FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        { id: uuidv4(), label: 'About Adeel' },
        { id: uuidv4(), label: 'Press Releases' },
        { id: uuidv4(), label: 'Environment' },
        { id: uuidv4(), label: 'Jobs' },
        { id: uuidv4(), label: 'Privacy Policy' },
        { id: uuidv4(), label: 'Contact Us' },
      ],
    },
    {
      title: 'Our Community',
      links: [
        { id: uuidv4(), label: 'Climbing xixixi' },
        { id: uuidv4(), label: 'Maher' },
        { id: uuidv4(), label: 'Adeel' },
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '0322-7711450' },
      { label: 'Email Officer', value: 'Thisisadeelashraf@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
    ],
  };