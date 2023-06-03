import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

type AppProviderPropsType = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderPropsType) => (
  <Suspense
    fallback={
      <div className="flex items-center justify-center w-screen h-screen">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    }
  >
    <RecoilRoot>{children}</RecoilRoot>
  </Suspense>
);
