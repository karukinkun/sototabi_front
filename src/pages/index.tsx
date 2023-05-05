import Image from 'next/image';
import { FC } from 'react';

import HeroImage from '@/features/Top/components/HeroImage';

const imageList = [
  {
    path: '/images/images.jpg',
    alt: 'テスト',
  },
  {
    path: '/images/images.jpg',
    alt: 'テスト',
  },
  {
    path: '/images/images.jpg',
    alt: 'テスト',
  },
  {
    path: '/images/images.jpg',
    alt: 'テスト',
  },
];

const TopPage: FC = () => {
  console.log(1);

  return (
    <>
      <HeroImage />
      <section className="px-content-side-width">
        <div className="w-full">
          <div className="">キャンペーン</div>
          <div id="section-contents-inner" className="flex justify-between">
            <ul className="flex justify-between spa">
              {imageList.map((image, i) => (
                <li key={i} className="w-1/2 md:w-[24%]">
                  <a href="/">
                    <div className="">
                      <Image
                        // src="/src/assets/images.jpg"
                        src={image.path}
                        alt={image.alt}
                        width={750}
                        height={563}
                        style={{ objectFit: 'contain' }} // or className={xxx}を用いる
                      />
                    </div>
                    <p>
                      これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopPage;
