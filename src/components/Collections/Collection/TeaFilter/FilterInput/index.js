import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import {
  withStyles,
  InputBase,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import ClearIcon from '@material-ui/icons/Clear';

import styles from './styles';
import ChosenItemChip from './ChosenItemChip';

const FilterInput = (props) => {
  const { classes, teaFilterState, emitChange, emitFocus, emitBlur } = props;
  const { tempFilterValues, currentTextValue } = teaFilterState;
  const { kinds, birthplaces, teaName } = tempFilterValues;

  const handleInputChange = (e) => {
    emitChange(e.target.value);
  };

  const isHovered = true;

  return (
    <Input
      className={classes.FilterInput}
      onChange={handleInputChange}
      onFocus={emitFocus}
      onBlur={emitBlur}
      startAdornment={
        <InputAdornment className={classes.ChosenItemChips} position="start">
          {kinds.map((kind) => {
            return <ChosenItemChip key={kind} label={kind} />;
          })}
          {birthplaces.map((birthplace) => {
            return <ChosenItemChip key={birthplace} label={birthplace} />;
          })}
          {teaName && <ChosenItemChip label={teaName} />}
        </InputAdornment>
      }
      value={currentTextValue}
    />
  );
};

export default withStyles(styles)(FilterInput);
