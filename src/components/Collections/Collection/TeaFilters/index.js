import React from 'react';
import { withStyles, TextField, Paper, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

import TeaType from './TeaType';
import TeaSearch from './TeaSearch';

const teaTypesData = [
  {
    title: 'Черный',
  },
  {
    title: 'Зеленый',
  },
  {
    title: 'Белый',
  },
  {
    title: 'Улун',
  },
  {
    title: 'Пуэр',
  },
  {
    title: 'Другой',
  },
];

const producingCountries = [
  {
    title: 'Китай',
  },
  {
    title: 'Индия',
  },
  {
    title: 'Африка',
  },
  {
    title: 'Россия',
  },
  {
    title: 'Южная Америка',
  },
  {
    title: 'Япония',
  },
  {
    title: 'Корея',
  },
  {
    title: 'Турция',
  },
];

const teaNames = [
  {
    name: 'Определенное небо',
  },
  {
    name: 'Жало пчелы',
  },
  {
    name: 'Лун Цзин',
  },
  {
    name: 'Неопределенное небо',
  },
  {
    name: 'Небесный цветок',
  },
  {
    name: 'Нифритовая херб',
  },
  {
    name: 'Джигурда',
  },
  {
    name: 'Пусть говорят',
  },
  {
    name: 'Давай поженимся',
  },
  {
    name: 'Киселев',
  },
  {
    name: 'Любовная настоечка',
  },
  {
    name: 'Ух бля',
  },
  {
    name: 'Вода не вода',
  },
  {
    name: 'Ужас',
  },
];

class TeaFilters extends React.Component {
  state = {
    isMenuOpen: false,
  };

  handleTextFieldFocus(e) {
    console.log(e);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.Root}>
        <div>
          <TextField value="asd" onFocus={this.handleTextFieldFocus} />
        </div>
        <div>
          <Paper className={classes.FilterMenu}>
            <div className={classes.FilterMenuSection}>
              <Typography
                className={classes.FilterSectionTitle}
                variant="subtitle1"
              >
                Вид
              </Typography>
              <div>
                <ul className={classes.FilterSectionList}>
                  {teaTypesData.map((type) => (
                    <li className={classes.FilterSectionListItem}>
                      <Typography>{type.title}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.FilterSectionDivider}>
              <div className={classes.FilterSectionDividerLine} />
            </div>
            <div className={classes.FilterMenuSection}>
              <Typography
                className={classes.FilterSectionTitle}
                variant="subtitle1"
              >
                Родина
              </Typography>
              <div>
                <ul className={classes.FilterSectionList}>
                  {producingCountries.map((country) => (
                    <li className={classes.FilterSectionListItem}>
                      <Typography>{country.title}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.FilterSectionDivider}>
              <div className={classes.FilterSectionDividerLine} />
            </div>
            <div className={classes.FilterMenuSection}>
              <Typography
                className={classes.FilterSectionTitle}
                variant="subtitle1"
              >
                Название
              </Typography>
              <div>
                <ul className={classes.FilterSectionList}>
                  {teaNames.map((tea) => (
                    <li className={classes.FilterSectionListItem}>
                      <Typography>{tea.name}</Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TeaFilters);
