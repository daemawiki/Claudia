interface Matches {
  href: string | null;
  text: string | null;
}

const linkChecker = (content: string) => {
  const instagramRegex =
    /<a href="(https?:\/\/(?:www\.)?instagram\.com\/\S+)">([^<]+)<\/a>/g;
  const githubRegex =
    /<a href="(https?:\/\/(?:www\.)?github\.com\/\S+)">([^<]+)<\/a>/g;

  const instagramMatches: Matches = {
    href: null,
    text: null,
  };
  let instagramMatch;
  if ((instagramMatch = instagramRegex.exec(content)) !== null) {
    const [, href, text] = instagramMatch;
    instagramMatches.href = href;
    instagramMatches.text = text;
  }

  const githubMatches: Matches = {
    href: null,
    text: null,
  };
  let githubMatch;
  if ((githubMatch = githubRegex.exec(content)) !== null) {
    const [, href, text] = githubMatch;
    console.log(href);
    console.log(text);
    githubMatches.href = href;
    githubMatches.text = text;
  }

  return { instagramMatches, githubMatches };
};

export default linkChecker;
