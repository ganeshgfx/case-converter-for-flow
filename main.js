const open = require("./node_modules/open");
const ncp = require("copy-paste");
const { method, parameters } = JSON.parse(process.argv[2]);

function toCamelCase(str) {
     return str
          .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
               index === 0 ? match.toLowerCase() : match.toUpperCase(),
          )
          .replace(/\s+/g, "");
}
function toPascalCase(str) {
     return str
          .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
          .replace(/\s+/g, "");
}

function toSnakeCase(str) {
     return str.replace(/\s+/g, "_").toLowerCase();
}

function toKebabCase(str) {
     return str.replace(/\s+/g, "-").toLowerCase();
}

function toMacroCase(str) {
     return str.replace(/\s+/g, "_").toUpperCase();
}

function toTitleCase(str) {
     return str.replace(
          /\w\S*/g,
          (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
     );
}

if (method === "query") {
     const text = parameters.join(" ").replace("case ", "");
     if (!text) {
          console.log(
               JSON.stringify({
                    result: [
                         {
                              Title: "Case Converter",
                              Subtitle:
                                   "Type text after 'case' to convert to different cases",
                              IcoPath: "Images\\app.png",
                         },
                    ],
               }),
          );
     } else {
          console.log(
               JSON.stringify({
                    result: [
                         {
                              Title: toTitleCase(text),
                              Subtitle: "Title Case - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toTitleCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: text.toLowerCase(),
                              Subtitle: "lowercase - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [text.toLowerCase()],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: text.toUpperCase(),
                              Subtitle: "UPPERCASE - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [text.toUpperCase()],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: toCamelCase(text),
                              Subtitle: "camelCase - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toCamelCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: toPascalCase(text),
                              Subtitle: "PascalCase - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toPascalCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: toSnakeCase(text),
                              Subtitle: "snake_case - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toSnakeCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: toKebabCase(text),
                              Subtitle: "kebab-case - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toKebabCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                         {
                              Title: toMacroCase(text),
                              Subtitle: "MACRO_CASE - Click to copy",
                              JsonRPCAction: {
                                   method: "copy_to_clipboard",
                                   parameters: [toMacroCase(text)],
                              },
                              IcoPath: "Images\\app.png",
                         },
                    ],
               }),
          );
     }
}

if (method === "copy_to_clipboard") {
     const textToCopy = parameters[0];
     ncp.copy(textToCopy);
}

if (method === "do_something_for_query") {
     url = parameters[0];
     do_something_for_query(url);
}

function do_something_for_query(url) {
     open(url);
}
