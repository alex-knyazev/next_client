import { withStyles } from '@material-ui/core';
import TeaFilters from './TeaFilters';
import Teas from './Teas';

const Collection = (props) => {
  const { classes } = props;
  return (
    <div className={classes.Root}>
      <TeaFilters />
      <Teas />
    </div>
  );
};

const styles = (theme) => {
  return {
    Root: {
      marginTop: 15,
      display: 'grid',
      gridTemplateRows: 'auto auto',
    },
  };
};

export default withStyles(styles)(Collection);
