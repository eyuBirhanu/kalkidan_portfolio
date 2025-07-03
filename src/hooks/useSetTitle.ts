import { useEffect } from 'react';

const useSetTitle = (title: string) => {
  useEffect(() => {
    document.title = title;

    return () => {
    };
  }, [title]);
};

export default useSetTitle;