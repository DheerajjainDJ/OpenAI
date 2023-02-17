import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Ai_image,
  app_screen,
  teddy,
  robot,
  white_logo,
} from "../assets/index";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto p-7 flex flex-col-reverse dark:bg-gray-900 dark:text-white  space-y-5 gap-4 md:flex-row md:space-y-0">
          <div className="text-white first_div text-center sm:text-left flex flex-col justify-center space-y-7 leading-normal dark:text-white md:w-1/2">
            <h3 className="text-3xl md:text-5xl tracking-wide md:max-w-lg font-bold text-center md:text-left">
              Convert text to image with an AI image generator
            </h3>
            <p className="text-lg md:max-w-md font-medium tracking-wide leading-snug text-center md:text-left">
              Create amazing artwork by yourself by using the power of AI image
              generator. Turn your imagination into mesmerizing artwork in mere
              seconds.
            </p>
            <div className="flex justify-center md:justify-start ">
              <button
                onClick={() => navigate("/create-post")}
                className="text-white tracking-wider px-8 text-lg py-2 rounded-full bg-purple-800 hover:bg-purple-700 active:bg-purple-900 hover:shadow-xl hover:font-bold hover:translate-x-1"
              >
                Generate
              </button>
            </div>
          </div>
          <div className="second_div md:w-1/2">
            <img
              src={Ai_image}
              loading="lazy"
              alt="ai_image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto mt-5 p-5 flex flex-col gap-4 md:flex-row">
          <div className="md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <img
                src={app_screen}
                alt="app_screen"
                loading="lazy"
                className="w-10/12 h-1/3 md:w-auto md:h-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <h1 className="text-4xl text-center md:text-left font-bold max-w-lg leading-tight">
              How to generate AI images with OpenAI
            </h1>
            <div className="flex justify-between gap-5">
              <h1 className="text-xl font-bold text-purple-800">Step 1</h1>
              <p className="text-lg leading-tight">
                Enter your text prompt in our text-to-image generator to convert
                it into an image. Get creative and descriptive with your prompt.
                You can also click{" "}
                <strong>Click to generate random prompt</strong> button to
                generate a random prompt.
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <h1 className="text-xl font-bold text-purple-800">Step 2</h1>
              <p className="text-lg leading-tight">
                After entering the prompt, click the{" "}
                <strong>"Generate Image"</strong> button to create your special
                image and result will be there in less than 5 seconds.
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <h1 className="text-xl font-bold text-purple-800">Step 3</h1>
              <p className="text-lg leading-tight">
                If you are satisfied with the generated image, click on the{" "}
                <strong>"Download Image"</strong> button to download your AI
                generated image.
              </p>
            </div>
            <div className="flex gap-5">
              <h1 className="text-xl font-bold text-purple-800">Step 4</h1>
              <p className="text-lg text-left leading-tight">
                You can also share your image to the{" "}
                <strong className="hover:underline hover:font-bold hover:text-blue-700 transition-all">
                  <Link to="community"> "community"</Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto p-5 py-10 mt-5 flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <img
              src={robot}
              alt="robot"
              loading="lazy"
              className="w-10/12 h-1/3 md:w-auto md:h-auto mx-auto rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center md:w-1/2">
            <h1 className="text-sm tracking-wide md:max-w-lg sm:text-lg font-medium leading-snug text-center md:text-left">
              When you can't find the perfect images to add to your design,
              simply find the right words and witness them magically come to
              life. From sensible descriptions to whimsical ideas, achieve
              AI-generated images in a few seconds with this app.Create an image
              from text that’ll quickly visualize your unique concept or idea
              for you and add it to any presentation or social media post.
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl p-5 py-10 mx-auto justify-between items-center flex flex-col-reverse gap-5 md:flex-row">
          <div className="flex items-center md:w-1/2">
            <h1 className="text-sm tracking-wide md:max-w-lg sm:text-lg font-medium leading-snug text-center md:text-left">
              When you’re generating images with a text to image AI tool,
              getting the prompts right is essential. Rather than using a few
              vague words, it helps to use a string of descriptive phrases. For
              example, including specific details regarding styles (like teddy
              bears in a grocery store, Impressionist, or anime), and artistic
              formats (say watercolor, oil painting, or stained glass), can turn
              out much richer AI-generated imagery. Even adding in a few
              adjectives, such as “dramatic” or “whimsical” can impact the final
              output of the image.
            </h1>
          </div>
          <div className="flex md:justify-center md:w-1/2">
            <img
              src={teddy}
              alt="teddy"
              loading="lazy"
              className="w-auto h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white dark:bg-gray-700 dark:text-white">
        <div className="max-w-4xl mx-auto text-center px-4 py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center text-center">
            <Link to="/">
              <img
                src={white_logo}
                alt="logo"
                className="w-28 text-black mix-blend-difference object-contain dark:mix-blend-color-dodge"
              />
            </Link>
          </div>
          <div className="flex flex-col space-y-2 md:items-center">
            <Link
              to="create-post"
              className="text-lg hover:text-gray-400 transition-colors"
            >
              Create
            </Link>
            <Link
              to="community"
              className="hover:text-gray-400 text-lg transition-colors"
            >
              Community
            </Link>
          </div>
          <div className="my-4 md:my-0 text-lg">
            Copyright &copy; 2023, All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
