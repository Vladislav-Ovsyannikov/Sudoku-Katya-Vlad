const {
  countVowels,
  splitWords,
  removePunctuation,
  calculateDate,
  getMonthAndDayOfWeek,
} = require('../index');

describe('Чекпоинт Strings/Regular expression', () => {
  const text = `
    Я - существо редчайшей из пород.
    В моих владеньях - лето круглый год.
    И я люблю тебя. Приди, мой друг.
    К тебе сбегутся эльфы для услуг,
    Чтоб жемчуг для тебя искать в морях
    И петь, когда ты дремлешь на цветах.
  `;
  it('функция countVowels считает количество гласных в тексте', () => {
    expect(countVowels(text)).toBe(60);
  });
  it('функция splitWords разбивает текст на слова', () => {
    expect(splitWords(text)).toEqual([
      'Я',
      'существо',
      'редчайшей',
      'из',
      'пород',
      'В',
      'моих',
      'владеньях',
      'лето',
      'круглый',
      'год',
      'И',
      'я',
      'люблю',
      'тебя',
      'Приди',
      'мой',
      'друг',
      'К',
      'тебе',
      'сбегутся',
      'эльфы',
      'для',
      'услуг',
      'Чтоб',
      'жемчуг',
      'для',
      'тебя',
      'искать',
      'в',
      'морях',
      'И',
      'петь',
      'когда',
      'ты',
      'дремлешь',
      'на',
      'цветах',
    ]);
  });
  it('функция removePunctuation удаляет все пробелы и знаки препинания', () => {
    expect(removePunctuation(text)).toEqual(
      'ЯсуществоредчайшейизпородВмоихвладеньяхлетокруглыйгодИялюблютебяПридимойдругКтебесбегутсяэльфыдляуслугЧтобжемчугдлятебяискатьвморяхИпетькогдатыдремлешьнацветах',
    );
  });
});

describe('Чекпоинт Dates', () => {
  describe('calculateDate', () => {
    test('возвращает сегодняшнюю дату в формате DD-MM-YYYY', () => {
      const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      expect(calculateDate()).toMatch(dateRegex);
    });

    test('возвращает текущий год', () => {
      const date = calculateDate();
      const year = Number(date.split('-')[2]);
      const currentYear = new Date().getFullYear();
      expect(year).toBeGreaterThanOrEqual(currentYear);
    });
  });
  describe('getMonthAndDayOfWeek', () => {
    test('возвращает правильный месяц и день', () => {
      expect(getMonthAndDayOfWeek('10/05/2021')).toBe('Май, понедельник');
    });
    test('возвращает правильный месяц и день для високосного года', () => {
      expect(getMonthAndDayOfWeek('29/02/2020')).toBe('Февраль, суббота');
    });
    test('возвращает правильный месяц и день для конца месяца', () => {
      expect(getMonthAndDayOfWeek('31/12/2021')).toBe('Декабрь, пятница');
    });
    test('возвращает правильный месяц и день для начала года', () => {
      expect(getMonthAndDayOfWeek('01/01/2022')).toBe('Январь, суббота');
    });
  });
});
