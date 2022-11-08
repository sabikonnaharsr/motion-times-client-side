import React from "react";
import img from '../../../Assets/wedding/wedding1.png'

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mt-18 mb-20">
        {" "}
        You’ve dreamed of this day for a lifetime. Make it unforgettable with
        wedding photography that reflects the unique couple that you are. Keep
        the memory of it alive forever with creative images that tell your love
        story to the world!
      </h1>
      <div className="gird grid-cols md:grid-cols-3 lg:grid-cols-2">
        <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 ">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
            >
              <span>2022</span>
              <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src= {img}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
              <a href="/">
                <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                  Finding the right guitar for your style - 5 tips
                </h3>
              </a>

              <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="/"
                class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
              >
                Read Blog
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
