function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function toSnakeCase(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

function toSentenceCase(str) {
  str = str.trim().toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCapitalizedCase(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function transformText(type) {
  const textArea = document.getElementById("inputText");
  let text = textArea.value;

  switch(type) {
    case 'lower':
      textArea.value = text.toLowerCase();
      break;
    case 'upper':
      textArea.value = text.toUpperCase();
      break;
    case 'sentence':
      textArea.value = toSentenceCase(text);
      break;
    case 'capitalized':
      textArea.value = toCapitalizedCase(text);
      break;
    case 'camel':
      textArea.value = toCamelCase(text);
      break;
    case 'snake':
      textArea.value = toSnakeCase(text);
      break;
  }
}
