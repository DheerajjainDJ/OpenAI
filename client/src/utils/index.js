import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constant/index";

export const generateRandomPrompt = (prompt) => {
  let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  let randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return generateRandomPrompt(prompt);
  return randomPrompt;
};

export const downloadImage = (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
