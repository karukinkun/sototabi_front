// const inter = Noto_Sans_JP({
//   subsets: ['latin'],
//   weight: '500',
// });

const TopContainer = () => {
  console.log(1);
  return (
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
  );
};

export default TopContainer;
