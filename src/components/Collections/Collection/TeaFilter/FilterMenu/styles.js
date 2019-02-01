const styles = (theme) => {
  const secondaryColor = theme.palette.secondary.main;
  const hoverColor = theme.palette.action.hover;
  return {
    Root: {
      position: 'absolute',
      width: 'max-content',
      padding: 10,
    },
    FilterMenuSections: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, max-content)',
    },
    AcceptWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    Section: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: 'inherit',
      padding: '8px 16px 0px 16px',
    },
    SectionDivider: {
      // width: '100%',
      // height: '100%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
    },
    SectionDividerLine: {
      width: 3,
      height: '60%',
      background: secondaryColor,
      borderRadius: '3px',
    },
    SectionTitle: {
      color: secondaryColor,
      fontWeight: 600,
    },
    SectionList: {
      height: 'inherit',
      marginBottom: 0,
      maxHeight: '45vh',
      overflowY: 'auto',
      // padding: 4,
    },
    SectionListItem: {
      padding: '8px 32px',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: hoverColor,
      },
    },

    AcceptButton: {
      textTransform: 'capitalize',
    },
  };
};

export default styles;
