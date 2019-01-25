import { withStyles } from '@material-ui/core';

const styles = (theme) => {
  return {
    Layout: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
};
const CenterContentLayout = (props) => {
  const { children, classes } = props;

  return <div className={classes.Layout}>{children}</div>;
};

export default withStyles(styles)(CenterContentLayout);
