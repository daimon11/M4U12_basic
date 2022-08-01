'use string';

(() => {
  // const FIGURES_ENG = ['rock', 'scissors', 'paper'];
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

    const exit = () => {
      let choice = confirm('Точно ли Вы хотите выйти?')
      if (choice === true) {
        alert(`Результат игр:\nКомпьютер: ${result.computer}\nВы: ${result.player}\n`);
        console.log(`Результат игр:\nКомпьютер: ${result.computer}\nВы: ${result.player}\n`);
        return;
      } else {
        return start();
      }
    };

    const userDateTransform = (string) => {
      switch (true) {
        case (string === 'бумага' || string === 'бум' || string === 'б' || string === 'Б'):
          string = 'бумага';
          break;
        case (string === 'ножницы' || string === 'нож' || string === 'н' || string === 'Н'):
          string = 'ножницы';
          break;
        case (string === 'камень' || string === 'кам' || string === 'к' || string === 'К'):
          string = 'камень';
          break;
        default:
          break;
      };
      return string;
    };

    return function start() {

      const userData = () => {
        let data = prompt('камень, ножницы, бумага?', '');
        return userDateTransform(data);
      };

      const newUserData = userData();
      const computerDate = FIGURES_RUS[(getRandomIntInclusive(0, (FIGURES_RUS.length - 1)))];
      const resultPrint = `Вы: ${newUserData}\nКомпьютер: ${computerDate}`;
      const winOrDraw = {
        player: 'Вы выиграли',
        computer: 'Компьютер выиграл',
        draw: 'Ничья',
      };

      switch (true) {
        case (newUserData === computerDate):
          alert(`${resultPrint}\n${winOrDraw.draw}`);
          console.log('ничья')
          start();
          break;
        case (newUserData === 'камень' && computerDate === 'бумага'):
          alert(`${resultPrint}\n${winOrDraw.computer}`);
          console.log('камень бумага')
          result.computer += 1;
          start();
          break;
        case (newUserData === 'камень' && computerDate === 'ножницы'):
          alert(`${resultPrint}\n${winOrDraw.player}`);
          console.log('камень ножницы')
          result.player += 1;
          start();
          break;
        case (newUserData === 'ножницы' && computerDate === 'бумага'):
          alert(`${resultPrint}\n${winOrDraw.player}`);
          console.log('ножницы бумага')
          result.player += 1;
          start();
          break;
        case (newUserData === 'ножницы' && computerDate === 'камень'):
          alert(`${resultPrint}\n${winOrDraw.computer}`);
          console.log('ножницы камень')
          result.computer += 1;
          start();
          break;
        case (newUserData === 'бумага' && computerDate === 'камень'):
          alert(`${resultPrint}\n${winOrDraw.player}`);
          console.log('бумага камень')
          result.player += 1;
          start();
          break;
        case (newUserData === 'бумага' && computerDate === 'ножницы'):
          alert(`${resultPrint}\n${winOrDraw.computer}`);
          console.log('бумага камень')
          result.computer += 1;
          start();
          break;
          case (newUserData === null):
            exit();
            return;
        default:
          start();
      };
    };
  };

  window.RPS = game;
})();



// const resultSum = window.factorySum(3);

// console.log(resultSum(5));
// console.log(resultSum(6));

