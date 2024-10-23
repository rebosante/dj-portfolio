export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('typewriter', {
      mounted(el) {
        function setupTypewriter(t: HTMLElement) {
          const nodes = [...t.childNodes]; // Get all child nodes
          t.innerHTML = ""; // Clear the element to start the effect
  
          let cursorPosition = 0;
          const typeSpeed = 100;
          let tempTypeSpeed = 0;
  
          // Recursive function to handle nodes
          function typeNode(node: ChildNode, parent: HTMLElement) {
            if (node.nodeType === Node.TEXT_NODE) {
              // Handle text nodes
              const text = node.textContent || "";
              let index = 0;
  
              const typeChar = () => {
                if (index < text.length) {
                  parent.append(text[index]);
                  index++;
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                  setTimeout(typeChar, tempTypeSpeed);
                } else {
                  cursorPosition++;
                  typeNextNode();
                }
              };
  
              typeChar();
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              // Handle element nodes (like <a>)
              const element = document.createElement((node as Element).tagName);
              // Copy attributes from the original element
              [...(node as Element).attributes].forEach(attr => {
                element.setAttribute(attr.name, attr.value);
              });
              parent.appendChild(element);
  
              // Recursively type the content of the element
              const childNodes = [...(node as Element).childNodes];
              if (childNodes.length > 0) {
                typeChildNodes(childNodes, element);
              } else {
                cursorPosition++;
                typeNextNode();
              }
            }
          }
  
          function typeChildNodes(nodes: ChildNode[], parent: HTMLElement) {
            nodes.forEach((node) => {
              typeNode(node, parent);
            });
          }
  
          function typeNextNode() {
            if (cursorPosition < nodes.length) {
              typeNode(nodes[cursorPosition], t);
            }
          }
  
          return {
            type: typeNextNode,
          };
        }
  
        const typewriter = setupTypewriter(el);
        typewriter.type();
      },
    });
  });
  