import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textPage = toString(tree);
    const readingTime = getReadingTime(textPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}