import Vue from 'vue';

Vue.directive('split', {
  bind(el) {
    const splitElement = (element) => {
      if (element === null || element === undefined) {
        return [];
      }
      let nodes = [];
      element.childNodes.forEach((node) => {
        if (node.nodeName === '#text') {
          nodes.push(node);
        } else {
          nodes = nodes.concat(splitElement(node));
        }
      });
      return nodes;
    };

    const createSpace = (container) => {
      const div = document.createElement('div');
      div.innerHTML = '&nbsp;';
      div.style.display = 'inline-block';
      div.style.position = 'relative';
      div.classList.add('word');
      div.classList.add('space');
      container.parentNode.insertBefore(div, container);
    };

    const createElement = (text, container, classe) => {
      const div = document.createElement('div');
      const node = document.createTextNode(text);
      div.nodeText = node;
      div.appendChild(node);
      div.style.display = 'inline-block';
      div.style.position = 'relative';
      div.classList.add(classe);
      container.parentNode.insertBefore(div, container);
      return div;
    };

    const splitCharacters = (node) => {
      const chars = [];
      const nodes = node.nodeValue.toString();
      if (nodes.trim() !== '') {
        for (let i = 0; i < nodes.length; i += 1) {
          const char = nodes.substr(i, 1);
          const element = createElement(char, node, 'char');
          if (char.trim() !== '') {
            chars.push(element);
          }
        }
        node.parentNode.removeChild(node);
      }
      return chars;
    };

    const splitWords = (node) => {
      const words = [];
      const nodes = node.nodeValue.toString().split(' ');
      nodes.forEach((word, index) => {
        const element = createElement(word, node, 'word');
        if (word.trim() !== '') {
          words.push(element);
        }
        if (index < nodes.length - 1) {
          createSpace(node);
        }
      });
      node.parentNode.removeChild(node);
      return words;
    };

    const splitNodes = (nodes) => {
      const split = { words: [], chars: [] };
      nodes.forEach((node) => {
        const words = splitWords(node);
        words.forEach((word) => {
          const chars = splitCharacters(word.nodeText);
          split.chars = split.chars.concat(chars);
          /* eslint-disable */
          word.chars = chars;
          /* eslint-enable */
        });
        split.words = split.words.concat(words);
      });
      return split;
    };

    return splitNodes(splitElement(el));
  },
});
