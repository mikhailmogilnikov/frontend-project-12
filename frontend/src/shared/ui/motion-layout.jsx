import { m } from 'framer-motion';

export const MotionLayout = ({ children, ...restProps }) => {
  return (
    <m.div layout {...restProps}>
      {children}
    </m.div>
  );
};
