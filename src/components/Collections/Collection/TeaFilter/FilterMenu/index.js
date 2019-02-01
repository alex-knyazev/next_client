import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, Button } from '@material-ui/core';

import styles from './styles';
import SectionItem from './SectionItem';

const teaTypes = ['Черный', 'Зеленый', 'Белый', 'Улун', 'Пуэр', 'Другой'];

const producingCountries = [
  'Китай',
  'Индия',
  'Африка',
  'Россия',
  'Южная Америка',
  'Япония',
  'Корея',
  'Турция',
];

const teaNames = [
  'Определенное небо',
  'Жало пчелы',
  'Лун Цзин',
  'Неопределенное небо',
  'Небесный цветок',
  'Нифритовая херб',
  'Джигурда',
  'Пусть говорят',
  'Давай поженимся',
  'Киселев',
  'Любовная настоечка',
  'Ух бля',
  'Вода не вода',
  'Ужас',
];

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.elemRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleChooseFilterItem = (key, value) => {
    this.props.emitChooseValue({ fieldKey: key, value });
  };

  handleUnchooseFilterItem = (key, value) => {
    this.props.emitUnchooseValue({ fieldKey: key, value });
  };

  checkIfFilterChosen = (filterKey, value) => {
    const {
      teaFilterState: { tempFilterValues },
    } = this.props;
    const isChosen = tempFilterValues[filterKey].includes(value);
    return isChosen;
  };

  handleClickOutside = (e) => {
    if (this.elemRef.current && !this.elemRef.current.contains(e.target)) {
      this.props.emitClickOutside();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.Root}>
        <div className={classes.FilterMenuSections} ref={this.elemRef}>
          <div className={classes.Section}>
            <Typography className={classes.SectionTitle} variant="subtitle1">
              Вид
            </Typography>
            <div>
              <ul className={classes.SectionList}>
                {teaTypes.map((type) => (
                  <SectionItem
                    key={type}
                    emitChooseValue={() =>
                      this.handleChooseFilterItem('kinds', type)
                    }
                    emitUnchooseValue={() =>
                      this.handleUnchooseFilterItem('kinds', type)
                    }
                    isChosen={this.checkIfFilterChosen('kinds', type)}
                    title={type}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.SectionDivider}>
            <div className={classes.SectionDividerLine} />
          </div>
          <div className={classes.Section}>
            <Typography className={classes.SectionTitle} variant="subtitle1">
              Происхождение
            </Typography>
            <div>
              <ul className={classes.SectionList}>
                {producingCountries.map((country) => (
                  <SectionItem
                    key={country}
                    emitChooseValue={() =>
                      this.handleChooseFilterItem('birthplaces', country)
                    }
                    emitUnchooseValue={() =>
                      this.handleUnchooseFilterItem('birthplaces', country)
                    }
                    isChosen={this.checkIfFilterChosen('birthplaces', country)}
                    title={country}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.SectionDivider}>
            <div className={classes.SectionDividerLine} />
          </div>
          <div className={classes.Section}>
            <Typography className={classes.SectionTitle} variant="subtitle1">
              Название
            </Typography>
            <div>
              <ul className={classes.SectionList}>
                {teaNames.map((tea) => (
                  <SectionItem
                    key={tea}
                    emitChooseValue={() =>
                      this.handleChooseFilterItem('teaName', tea)
                    }
                    emitUnchooseValue={() =>
                      this.handleUnchooseFilterItem('teaName', teaNames)
                    }
                    isChosen={this.checkIfFilterChosen('teaName', tea)}
                    title={tea}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.AcceptWrapper}>
          <Button
            variant="outlined"
            className={classes.AcceptButton}
            color="primary"
            onClick={this.props.emitAcceptTempFilter}
          >
            Применить
          </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(FilterMenu);
