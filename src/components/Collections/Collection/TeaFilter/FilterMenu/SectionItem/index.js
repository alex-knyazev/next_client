import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const SectionItem = (props) => {
  const { classes, emitChooseValue, emitUnchooseValue, isChosen } = props;

  const ItemCn = cn({
    [classes.Item]: true,
    [classes.Item_isChosen]: isChosen,
  });

  return (
    <li
      onClick={() => {
        if (isChosen) {
          emitUnchooseValue();
        } else {
          emitChooseValue();
        }
      }}
      className={ItemCn}
    >
      <Typography>{isChosen ? <b>{props.title}</b> : props.title}</Typography>
    </li>
  );
};

const styles = (theme, a, b) => {
  const hoverColor = theme.palette.action.hover;
  const disabledColor = theme.palette.action.disabledBackground;
  return {
    Item: {
      padding: '8px 34px 8px 8px',
      cursor: 'pointer',
      display: 'flex',
      position: 'relative',
      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
    Item_isChosen: {
      // backgroundColor: disabledColor,
      // opacity: 0.5,
      // fontWeight: 600,
    },
  };
};

// onClick={props.handleChooseItem(props.title)}
export default withStyles(styles)(SectionItem);
