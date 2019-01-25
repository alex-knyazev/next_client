import { Button, withStyles } from '@material-ui/core';

const allCollectionsD = [
  {
    label: 'Всемирная коллекция',
    value: 'all',
  },
  {
    label: 'Пробовал',
    value: 'tried',
  },
  {
    label: 'Хочу попробовать',
    value: 'want',
  },
];

const chosenCollectionD = allCollectionsD[0];

const CollectionSelect = (props) => {
  const handle = (e) => {
    console.log(e);
  };
  const {
    allCollections = allCollectionsD,
    chosenCollection = chosenCollectionD,
    handleChangeCollection = handle,
  } = props;
  const { classes } = props;

  return (
    <div>
      <ul className={classes.CollectionsList}>
        {allCollections.map((type) => (
          <li key={type.value}>
            <Button
              className={classes.CollectionButton}
              value={type.value}
              label={type.label}
            >
              {type.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = (theme) => {
  return {
    CollectionsList: {
      margin: '4px 0 4px 0',
      display: 'flex',
    },
    CollectionButton: {
      textTransform: 'capitalize',
    },
  };
};

export default withStyles(styles)(CollectionSelect);
