import { useInView } from 'react-intersection-observer';

const useHorizontalInView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5 // Trigger when 50% of the element is in view
  });

  return { ref, inView };
};

export default useHorizontalInView;
