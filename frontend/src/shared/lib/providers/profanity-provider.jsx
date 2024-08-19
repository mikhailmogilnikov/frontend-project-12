import { useEffect } from 'react';
import filter from 'leo-profanity';

export const ProfanityProvider = ({ children }) => {
  useEffect(() => {
    // remove all bad words from the filter
    // now the filter can't filter anything cause there are no bad words
    filter.clearList();

    // adding word (from builtin dictionary) into the filter
    filter.add(filter.getDictionary('en'));
    filter.add(filter.getDictionary('fr'));
    filter.add(filter.getDictionary('ru'));
  }, []);

  return children;
};
