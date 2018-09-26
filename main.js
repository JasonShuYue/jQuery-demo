window.$ = jQuery;


window.jQuery = function(nodeOrSelector) {
    let nodes = {};
    if(typeof nodeOrSelector === "string") {
        let temp = document.querySelectorAll(nodeOrSelector);
        for(let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length;
    } else if(nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1,
        };
    }

    nodes.getSiblings = function() {
        let arr = {
            length: 0,
        };
        if(nodes.length === 1) {
            let allChildren = nodes[0].parentNode.children;
            for(let i = 0; i < allChildren.length; i++) {
                if(allChildren[i] !== nodes[0]) {
                    arr[arr.length] = allChildren[i];
                    arr.length++;
                }
            }

        }
        return arr;
    };

    nodes.addClass =  function(classList = []) {
        classList.forEach(value => {
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].classList.add(value)
            }
        });
    };

    nodes.text = function(text) {
        let texts = [];
        if(text === undefined) {
            for(let i = 0; i < nodes.length; i++) {
                texts.push(nodes[i].textContent);
            }
        } else {
            for(let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text;
            }
        }
        return texts;
    };

    return nodes;
}

let item3 = document.getElementById("item3");

let node2 = $("li");

console.log(node2.text())

node2.addClass.call(item3, ['a', 'c', 'a'])
