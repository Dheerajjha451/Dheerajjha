import { motion } from 'framer-motion';
import IMG1 from "../assets/ui.jpeg";
import IMG2 from "../assets/web.jpeg";
import {Zoom} from "react-awesome-reveal";

const Services = () => {
  const servicesData = [
    {
      title: 'UI/UX Design',
      image: IMG1,
    },
    {
      title: 'Full Stack Development',
      image: IMG2,
    },
  ];

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Services</h2>
      <div className="flex flex-wrap justify-center">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-white rounded-lg shadow-lg mx-2 my-4 overflow-hidden transition duration-300 transform hover:scale-105"
          >
            <div className="mb-4">
                <Zoom>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded-md"
              /></Zoom>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
