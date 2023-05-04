import Image from 'next/image';

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

const TopContainer = () => {
  console.log(1);
  return (
    <>
      <section id="home" className="h-96 w-full relative">
        <div id="image" className="absolute w-full h-full max-h-30px">
          <div id="image-box" className="absolute w-full h-full max-h-30px">
            <div id="image-inner" className="relative w-full h-full overflow-hidden">
              <div
                id="image-wrap"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <img alt="top.jpg" src="/top.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top">
          <div className="bg-black rounded-r-md">さあキャンプ</div>
        </div>
        <div className="absolute max-w-[800px] text-center">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            さあキャンプへでかけよう。
          </h1>
          <p className="mb-12 text-base font-medium leading-relaxed text-body-color text-white dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
            全国4855件のキャンプ場検索・予約ができます
          </p>
        </div>
      </section>
      <section className="px-content-side-width">
        <div className="w-full">
          <div className="">キャンペーン</div>
          <div id="section-contents-inner" className="flex justify-between">
            <ul className="flex justify-between">
              {imageList.map((image, i) => (
                <li key={i} className="w-1/2 md:w-1/4 pr-2 md:pr-5">
                  <a href="#">
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

export default TopContainer;
