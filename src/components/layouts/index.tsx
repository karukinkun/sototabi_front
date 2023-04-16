import { FC, ReactNode } from 'react';

type LayoutPropsType = {
  readonly children: ReactNode;
};

const Layout: FC<LayoutPropsType> = ({ children }) => <main>{children}</main>;

export default Layout;
