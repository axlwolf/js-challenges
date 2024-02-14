const generateHashtag = (str) => {
  if (str.trim() === "") return false;

  const words = str
    .trim()
    .split(/\s+/)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);

  const hashtag = "#" + words.join("");

  if (hashtag.length > 140) return false;

  return hashtag;
};

export default generateHashtag;
