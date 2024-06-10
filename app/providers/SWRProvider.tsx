// providers/SWRProvider.tsx

import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';

interface SWRProviderProps {
  children: ReactNode;
}

const SWRProvider = ({ children }: SWRProviderProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
        onError: (error) => {
          console.error(error);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
