/*
HeroImageというコンポーネントをこのファイル内に作成する。
このコンポーネントの内容は以下の通りである。

■概要
・ページのトップに表示される画像を表示するコンポーネントである。
・このコンポーネントは親コンポーネントにimportされることを想定しているため、exportする必要はない。
・スタイル指定はtailwindcssを使用する。
・レスポンシブレイアウトである。
・NextのImageコンポーネントを使用する。
・画像はsrc\images\top.jpgを使用する。
・画像の上に "さあキャンプへでかけよう。" という文字を表示する。
*/
import Image from 'next/image';
import { memo } from 'react';

const HeroImage = () => (
  <span className="relative">
    <Image src="/images/top.jpg" alt="top" width={1920} height={1280} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h1 className="text-5xl font-bold">さあキャンプへでかけよう。</h1>
    </div>
  </span>
);
export default memo(HeroImage);
