/*
Layoutというコンポーネントをこのファイル内に作成する。
このコンポーネントの内容は以下の通りである。

■概要
・全画面共通のレイアウトを定義する。
・childrenというpropsを受け取り、その中身を表示する。
・childrenの中身は、各ページのコンポーネントである。
・ページトップにスクロールするボタンを画面右下に表示する。
・スタイル指定はtailwindcssを使用する。
*/
import { memo, ReactNode, FC } from 'react';

import ScrollToTopButton from '@/components/Elements/ScrollToTopButton';
import Header from '@/components/Header/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="font-body">
      <Header />
      <div className="flex flex-col min-h-screen text-gray-900">{children}</div>
      <ScrollToTopButton />
    </div>
  );
};

export default memo(Layout);
