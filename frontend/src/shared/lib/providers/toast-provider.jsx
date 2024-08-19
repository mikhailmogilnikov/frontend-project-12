import { useTheme } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastProvider = ({ children }) => {
  const { resolvedTheme } = useTheme();

  function TestError() {
    const a = null;
    return a.hello();
  }
  return (
    <>
      <ToastContainer
        theme={resolvedTheme}
        position='bottom-left'
        stacked
        closeOnClick
        hideProgressBar
        draggable
      />
      <TestError />
      {children}
    </>
  );
};
