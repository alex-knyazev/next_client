const styles = (theme) => {
  const secondaryColor = theme.palette.secondary.main;
  const hoverColor = theme.palette.action.hover;
  return {
    Root: {
      // display: 'flex',
      zIndex: '2',
      marginLeft: 10,
    },
    FilterMenu: {
      position: 'absolute',
      width: 'max-content',
      display: 'grid',
      height: '360px',
      gridTemplateColumns: 'repeat(5, max-content)',
    },
    FilterMenuSection: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: 'inherit',
      padding: 20,
    },
    FilterSectionDivider: {
      // width: '100%',
      // height: '100%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
    },
    FilterSectionDividerLine: {
      width: 3,
      height: '60%',
      background: secondaryColor,
      borderRadius: '3px',
    },
    FilterSectionTitle: {
      color: secondaryColor,
      fontWeight: 600,
    },
    FilterSectionList: {
      height: 'inherit',
      // padding: 4,
    },
    FilterSectionListItem: {
      padding: '8px 32px',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: hoverColor,
      },
    },
  };
};

export default styles;
