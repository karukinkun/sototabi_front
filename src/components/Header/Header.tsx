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

import Button from '../Elements/Button';

const Header: FC = () => (
  <header className="z-30 flex items-center h-14 md:h-14 w-full px-content-side-width">
    <div className="flex justify-between w-full">
      <div className="text-3xl font-black">Watch.ME</div>
      <div className="flex items-center">
        <div className="hidden text-lg md:flex items-center">
          <a href="/" className="flex pr-6">
            会員登録
          </a>
          <Button>ログイン</Button>
        </div>
        <button type="button" className="flex flex-col md:hidden">
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white" />
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white" />
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white" />
        </button>
      </div>
    </div>
  </header>
);
export default memo(Header);
