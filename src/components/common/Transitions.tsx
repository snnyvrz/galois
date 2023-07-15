import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export const TestTransition = ({ children, index }: PropsWithChildren & { index: number }) => {
  return (
    <motion.div
      key={index}
      initial={{ x: index % 2 ? '100%' : '-100%' }}
      whileInView={{ x: 0, transitionDuration: (500 + index * 100).toString().concat('ms') }}
    >
      {children}
    </motion.div>
  );
};
