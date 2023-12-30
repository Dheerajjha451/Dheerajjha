import React from 'react';
import { FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Img1 from '../assets/StudBud.png';
import Img2 from '../assets/Prompt.jpg';
import Img3 from '../assets/G.png';
import Img4 from '../assets/robohand.jpg';

interface BlogPost {
  title: string;
  content: string;
  imageUrl: string;
  link: string;
  mediumLink?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Idea behind StudBud',
    content: 'A Student Buddy which provides the latest news, articles, and research-related information to the students.',
    imageUrl: Img1,
    link: 'https://medium.com/@dheerajjha451/the-idea-behind-studbud-a-student-buddy-which-provide-the-latest-news-articles-and-research-fc8d7802e9be',
    mediumLink: 'https://medium.com/@dheerajjha451',
  },
  {
    title: 'Empowering Language Models',
    content: 'A Journey of Hands-On Prompt Engineering. Understanding the Two Types of LLMs. Crafting Effective Prompts',
    imageUrl: Img2,
    link: 'https://medium.com/@dheerajjha451/empowering-language-models-a-journey-of-hands-on-prompt-engineering-cda34a72e48d',
    mediumLink: 'https://medium.com/@dheerajjha451',
  },
  {
    title: 'Harnessing the Power of Generative AI with Google Cloud',
    content: 'Fueling Innovation and Igniting Creative Potential.',
    imageUrl: Img3,
    link: 'https://medium.com/@dheerajjha451/harnessing-the-power-of-generative-ai-with-google-cloud-fueling-innovation-and-igniting-creative-cffe980b4c10',
    mediumLink: 'https://medium.com/@dheerajjha451',
  },
  {
    title: 'Embarking on a Journey of Discovery',
    content: 'Exploring the Fundamentals of Machine Learning with the AWS AI and ML Scholarship.',
    imageUrl: Img4,
    link: 'https://medium.com/@dheerajjha451/embarking-on-a-journey-of-discovery-exploring-the-fundamentals-of-machine-learning-with-the-aws-ai-222220e5abf1',
    mediumLink: 'https://medium.com/@dheerajjha451',
  },
];

const BlogPostCard: React.FC<BlogPost> = ({ title, content, imageUrl, link, mediumLink }) => {
   // eslint-disable-next-line
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="max-w-md mx-auto my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600">{content}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              Read more
            </a>
            {mediumLink && (
              <a
                href={mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400"
              >
                <FaMedium className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blogs: React.FC = () => {
  return (
    <div className="">
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-3 sm:p-4">
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Blogs;
