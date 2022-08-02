'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const exit = () => {
        const choice = confirm('Точно ли Вы хотите выйти?');
        if (choice === true) {
          alert(`Результат игр:
          Компьютер: ${result.computer}\nВы: ${result.player}\n`);
          return;
        } else {
          return start();
        }
      };

      const userDateTransform = (string) => {
        switch (true) {
          case (string === null):
            exit();
            break;
          case (FIGURES_RUS.indexOf(string) === -1):
            start();
            break;
          default:
            return FIGURES_RUS.indexOf(string);
        }
      };

      const data = prompt('камень, ножницы, бумага?', '');
      const newUserData = userDateTransform(data);
      const computerDate = getRandomIntInclusive(0, (FIGURES_RUS.length - 1));
      const resultPrint =
      `Вы: ${data}\nКомпьютер: ${FIGURES_RUS[computerDate]}`;
      const winOrDraw = {
        player: 'Вы выиграли',
        computer: 'Компьютер выиграл',
        draw: 'Ничья',
      };

      const gameProcess = (a, b) => {
        switch (true) {
          case (a === b):
            alert(`${resultPrint}\n${winOrDraw.draw}`);
            start();
            break;
          case (a === 0 && b === 1 ||
            a === 1 && b === 2):
            alert(`${resultPrint}\n${winOrDraw.user}`);
            result.user += 1;
            start();
            break;
          case (a === undefined):
            break;
          default:
            alert(`${resultPrint}\n${winOrDraw.computer}`);
            result.computer += 1;
            start();
            break;
        }
      };
      gameProcess(newUserData, computerDate);
    };
  };

  window.RPS = game;
})();
