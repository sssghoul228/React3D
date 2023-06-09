import React from 'react';
class UI extends React.Component {
  constructor(props) {
    super(props);
    this.num = 0;
    this.callbacks = props.callbacks;
  }

  addFunction() {
    const button = document.createElement('button');
    button.setAttribute('id', 'delete');
    button.innerHTML = 'Delete';
    button.addEventListener('click', () => {
      this.callbacks.delFunction(input.dataset.num);
      div.removeChild(input);
      div.removeChild(button);
      div.removeChild(width);
      div.removeChild(color);
      div.removeChild(start);
      div.removeChild(end);
      div.removeChild(checkbox);
      div.removeChild(derivativeDiv);
    });

    const start = document.createElement('input');
    start.setAttribute('placeholder', 'Начало');
    start.setAttribute('class', 'params');
    start.setAttribute('id', 'start' + this.num);
    start.dataset.num = this.num;
    start.addEventListener('keyup', () => this.getValue(start));

    const end = document.createElement('input');
    end.setAttribute('placeholder', 'Конец');
    end.setAttribute('class', 'params');
    end.setAttribute('id', 'end' + this.num);
    end.dataset.num = this.num;
    end.addEventListener('keyup', () => this.getValue(end));

    const width = document.createElement('input');
    width.setAttribute('placeholder', 'Ширина');
    width.setAttribute('id', 'width' + this.num);
    width.setAttribute('class', 'params');
    width.dataset.num = this.num;
    width.addEventListener('keyup', () => this.getValue(width));

    const color = document.createElement('input');
    color.setAttribute('placeholder', 'Цвет');
    color.setAttribute('id', 'color' + this.num);
    color.setAttribute('class', 'params');
    color.dataset.num = this.num;
    color.addEventListener('keyup', () => this.getValue(color));

    const input = document.createElement('input');
    input.setAttribute('placeholder', `Функция №${this.num}`);
    input.setAttribute('id', 'inp' + this.num);
    input.setAttribute('class', 'params');
    input.dataset.num = this.num;
    input.addEventListener('keyup', () => this.keyup(input));

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('className', 'check2D');

    checkbox.setAttribute('id', 'checkbox' + this.num);
    checkbox.dataset.num = this.num;
    const derivativeDiv = document.createElement('div');
    derivativeDiv.innerHTML = 'Касательная';
    derivativeDiv.className = 'Casatel';
    checkbox.addEventListener('click', () => {
      if (checkbox.hasAttribute('cheked')) {
        checkbox.removeAttribute('cheked');
      } else checkbox.setAttribute('cheked', '');
      this.getValue(checkbox);
    });

    const div = document.createElement('div');

    const funcsInputs = document.getElementById('funcsInputs');
    funcsInputs.appendChild(div);
    div.appendChild(input);
    div.appendChild(width);
    div.appendChild(color);
    div.appendChild(start);
    div.appendChild(end);
    div.appendChild(button);
    div.appendChild(checkbox);
    div.appendChild(derivativeDiv);

    this.num++;
  }

  notEval(code) {
    return new Function('return ' + code)();
  }

  keyup(elem) {
    try {
      let f;
      this.notEval(`f = function (x) {return ${elem.value};}`);

      let width = document.getElementById(`width${elem.dataset.num}`);
      let color = document.getElementById(`color${elem.dataset.num}`);

      let start = document.getElementById(`start${elem.dataset.num}`);
      let end = document.getElementById(`end${elem.dataset.num}`);

      let check = document.getElementById(`checkbox${elem.dataset.num}`);
      const flag = check.hasAttribute('cheked');

      this.callbacks.addFunction(
        f,
        elem.dataset.num,
        width.value,
        color.value,
        start.value,
        end.value,
        flag
      );
    } catch (e) {}
  }

  getValue(elem) {
    try {
      let f;
      let graph = document.getElementById(`inp${elem.dataset.num}`);
      this.notEval(`f = function (x) {return ${graph.value};}`);

      let check = document.getElementById(`checkbox${elem.dataset.num}`);
      const flag = check.hasAttribute('cheked');

      let width = document.getElementById(`width${elem.dataset.num}`);
      let color = document.getElementById(`color${elem.dataset.num}`);

      let start = document.getElementById(`start${elem.dataset.num}`);
      let end = document.getElementById(`end${elem.dataset.num}`);

      this.callbacks.addFunction(
        f,
        elem.dataset.num,
        width.value,
        color.value,
        start.value,
        end.value,
        flag
      );
    } catch (e) {}
  }

  render() {
    return (
      <div>
        <button id="addFunction" onClick={() => this.addFunction()}>
          Add function
        </button>
        <div id="funcsInputs"></div>
      </div>
    );
  }
}

export default UI;
