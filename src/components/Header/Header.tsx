/*
Headerというコンポーネントをこのファイル内に作成する。
このコンポーネントの内容は以下の通りである。

■概要
・全画面共通のヘッダーパーツとなる。
・PCサイズではlogo画像とナビゲーションメニューとログインボタンを横並びで表示する。
・スマホサイズではlogoとハンバーガーメニューを横並びに表示して、ハンバーガーメニューを押下時にナビゲーションメニューを表示する。
・このコンポーネントはexportされることを想定しているため、exportする必要がある。
・スタイル指定はtailwindcssを使用する。
・chackra-ui/reactは使用しない。
・レスポンシブレイアウトである。
・スクロール時でも常に表示されるようにする。
・ロゴ画像はsrc\images\logo.pngを使用する。
・ロゴ画像はnext/imageを使用する。
*/
import { memo, FC } from 'react';
import { useRecoilState } from 'recoil';

import { centerState } from '@/atoms/atom';

interface Props {
  userName: string;
}

const Header: FC<Props> = () => {
  const [center, setCenter] = useRecoilState(centerState);

  setCenter('aaa');

  return (
    <header className="z-30 w-full px-content-side-width">
      <div className="text-2xl font-black text-center py-3">未るみる</div>
      <div className="text-base font-bold py-2 bg-primary px-4">
        <span className="text-white-400 text-white">{center}</span>
      </div>
    </header>
  );
};
export default memo(Header);
