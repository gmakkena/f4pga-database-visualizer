export class DefinitionListBuilder {
    constructor(attrs={}) {
        this.dl = document.createElement("dl");
        for (const [attr, value] of Object.entries(attrs)) {
            this.dl.setAttribute(attr, value);
        }
    }

    /**
     * @param {string} term
     * @param {string|Array<HTMLElement>} definition
     */
    addEntry(term, definition) {
        let dt = document.createElement("dt");
        let dd = document.createElement("dd");
        dt.innerText = term;
        if (definition instanceof Array)
            definition.forEach((el) => dd.appendChild(el));
        else if (definition instanceof HTMLElement)
            dd.appendChild(definition);
        else
            dd.innerText = definition;
        this.dl.appendChild(dt);
        this.dl.appendChild(dd);
        return this;
    }

    isEmpty() {
        return this.dl.childElementCount == 0;
    }

    /**
     * @returns {HTMLDListElement}
     */
    build() {
        return this.dl;
    }
};

export class ListBuilder {
    /**
     * @param {"ul"|"ol"} tagName
     */
    constructor(tagName="ul", attrs={}) {
        this.l = document.createElement(tagName);
        for (const [attr, value] of Object.entries(attrs)) {
            this.l.setAttribute(attr, value);
        }
    }

    /**
     * @param {string|Array<HTMLElement>} value
     */
    addEntry(value) {
        let li = document.createElement("li");
        if (value instanceof Array)
            value.forEach((el) => li.appendChild(el));
        else if (value instanceof HTMLElement)
            li.appendChild(value);
        else
            li.innerText = value;
        this.l.appendChild(li);
        return this;
    }

    isEmpty() {
        return this.l.childElementCount == 0;
    }

    /**
     * @returns {HTMLUListElement|HTMLOListElement}
     */
    build() {
        return this.l;
    }
}
