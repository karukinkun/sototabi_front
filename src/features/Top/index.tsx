// const inter = Noto_Sans_JP({
//   subsets: ['latin'],
//   weight: '500',
// });

const TopContainer = () => {
  console.log(1);
  return (
    <section id="home" className="h-full">
      <div className="">
        <div className="">
          <div className="wow fadeInUp mx-auto max-w-[800px] text-center" data-wow-delay=".2s">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-red-500 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              タイトルが入ります。
            </h1>
            <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
              Startup is free Next.js template for startups and SaaS business websites comes with
              all the essential pages, components, and sections you need to launch a complete
              business website, built-with Next 13.x and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContainer;
