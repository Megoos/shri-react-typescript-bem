# ДЗ - «БЭМ»

### Этапы выполнения

1. Первым этапом перевел часть проекта на React используя `bem-classname`, немного упростил блоки с карточками.

2. Применил `bem-core` для карточек, выделив тему для типа карточки = `critical`, в итоге у карточки применяется тема к иконке и основной части (иконка становится белой, а фон карточки красный).

3. `bem-di` использовал для разных Header-ов на мобильной и десктопной версии. С помощью `mobile-detect` определяю тип устройства и использую нужный инстанс App.

Для запуска необходимо выполнить команды:
```
yarn

yarn start
```