import { Link } from '@/base/extraRoutes';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';

const NavButton = (props) => {
  const { classes, to, isActive, text, justLink } = props;

  const cnNavButton = cn({
    [classes.NavButton]: true,
    [classes.NavButton_active]: isActive,
    [classes.NavButton_justLink]: justLink,
    [classes.NavButton_withButton]: !justLink,
  });

  if (justLink) {
    return (
      <Link href={to} passHref>
        <a className={cnNavButton}>{text}</a>
      </Link>
    );
  }
  return (
    <Link href={to} passHref>
      <Button className={cnNavButton}>{text}</Button>
    </Link>
  );
};

const styles = (theme) => {
  return {
    NavButton: {
      fontSize: 16,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    NavButton_active: {
      color: theme.palette.secondary.main,
    },
    NavButton_withButton: {
      height: 40,
    },
    NavButton_justLink: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
};

export default withStyles(styles)(NavButton);
