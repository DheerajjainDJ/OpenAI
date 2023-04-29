import React, { useState } from "react";
import FormField from "../comps/FormField";
import Loader from "../comps/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { preview_pic, circular_progress } from "../assets/index";
import { generateRandomPrompt, downloadImage } from "../utils/index";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setIsSharing(true);
      try {
        const response = await axios.post(
          "https://open-ai-server.up.railway.app/api/v1/post",
          form
        );
        if (response) {
          navigate("/community");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setIsSharing(false);
      }
    } else {
      alert("Enter prompt name and generate a photo");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = generateRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const handleGenerate = async () => {
    if (form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await axios.post(
          "https://open-ai-server.up.railway.app/api/v1/dalle",
          {
            prompt: form.prompt,
          }
        );
        setForm({
          ...form,
          photo: `data:image/jpeg;base64,${response.data.photo}`,
        });
      } catch (error) {
        alert(error.message);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert("please enter a prompt");
    }
  };

  return (
    <section className="min-h-screen bg-slate-200 dark:bg-gray-800 dark:text-white">
      <div className="max-w-lg mx-auto px-5 py-8 space-y-3 text-center">
        <h1 className="font-bold text-black text-3xl dark:text-white">
          Create
        </h1>
        <p className="text-gray-500 text-xl max-w-xl tracking-wide dark:text-white">
          Convert words into an image in mere seconds through DALL-E and share
          with the community.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 md:gap-8">
            <FormField
              labelName="Your name"
              type="text"
              value={form.name}
              name="name"
              placeholder="Enter name"
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              value={form.prompt}
              name="prompt"
              placeholder="A comic book cover of a superhero wearing headphones"
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className="relative w-72 h-72 mx-auto flex flex-col items-center justify-center p-3 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img
                    src={preview_pic}
                    alt="preview"
                    className="w-4/6 h-4/6 object-contain opacity-40"
                  />
                  <p className="text-base mt-1 text-gray-500">
                    Generated image will appear here!
                  </p>
                </>
              )}
              {generatingImage && (
                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
                  <Loader />
                </div>
              )}
            </div>
            <button
              onClick={handleGenerate}
              type="button"
              disabled={generatingImage}
              className={`w-full flex space-x-2 items-center justify-center text-white text-lg tracking-wide bg-blue-800 hover:bg-blue-700 active:bg-blue-900 hover:shadow-lg px-6 py-2 rounded-lg font-medium ${
                generatingImage && "opacity-50 cursor-not-allowed"
              }`}
            >
              {generatingImage ? "Generating..." : "Generate Image"}
              {generatingImage && (
                <img
                  className="mix-blend-multiply ml-2 h-8 w-8"
                  src={circular_progress}
                />
              )}
            </button>
            {form.photo && (
              <button
                onClick={() => downloadImage(form.prompt, form.photo)}
                type="button"
                className="w-full text-white text-lg tracking-wide bg-[#3E54AC] hover:bg-[#5B8FB9] active:bg-blue-900 hover:shadow-lg px-6 py-2 rounded-lg font-medium text-center"
              >
                Download Image
              </button>
            )}
            <p className="text-lg font-medium tracking-wide text-gray-600 w-full dark:text-gray-400">
              Once you have created the image you want, you can share it with
              others in the community
            </p>
            <button
              type="submit"
              disabled={isSharing}
              className={`bg-[#D61355] hover:bg-[#EA047E] active:bg-[#F94C66] text-lg flex items-center justify-center tracking-wide rounded-lg text-white font-medium py-2 px-6 hover:shadow-lg ${
                isSharing && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isSharing ? "Sharing..." : "Share with community"}
              {isSharing && (
                <img
                  className="mix-blend-multiply ml-2 h-8 w-8"
                  src={circular_progress}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
