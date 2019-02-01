class TeaFilterParams {
  constructor() {
    this.kinds = [];
    this.birthplaces = [];
    this.teaName = '';
  }

  setFieldValue({ fieldKey, value }) {
    if (this[fieldKey] === undefined) {
      throw new Error(`there is no such filter: ${fieldKey}`);
    }
    if (fieldKey === 'teaName') {
      this[fieldKey] = value;
    } else {
      this[fieldKey] = [...this[fieldKey], value];
    }
    return this;
  }

  unsetFieldValue({ fieldKey, value }) {
    if (!this[fieldKey]) {
      throw new Error(`there is no such filter: ${fieldKey}`);
    }
    if (fieldKey === 'teaName') {
      this[fieldKey] = '';
    } else {
      this[fieldKey] = this[fieldKey].filter((fieldValue) => {
        if (fieldValue === value) {
          return false;
        }
        return true;
      });
    }
    return this;
  }
}

const initTeaFilterState = {
  tempFilterValues: new TeaFilterParams(),
  filterValues: new TeaFilterParams(),
  currentTextValue: '',
  isFilterMenuOpened: false,
};

function teaFilter(state = initTeaFilterState, action) {
  switch (action.type) {
    case 'SET_TEA_FILTER_CURRENT_TEXT_VALUE':
      return {
        ...state,
        currentTextValue: action.payload,
      };

    case 'SET_TEMP_TEA_FILTER_FIELD': {
      const newTempFilter = state.tempFilterValues.setFieldValue(
        action.payload,
      );
      return {
        ...state,
        tempFilterValues: newTempFilter,
      };
    }

    case 'UNSET_TEMP_TEA_FILTER_FIELD': {
      const newTempFilter = state.tempFilterValues.unsetFieldValue(
        action.payload,
      );
      return {
        ...state,
        tempFilterValues: newTempFilter,
      };
    }

    case 'ACCEPT_TEMP_TEA_FILTER': {
      return {
        ...state,
        isFilterMenuOpened: false,
        filterValues: { ...state.tempFilterValues },
      };
    }

    // case 'ADD_TEA_FILTER_SOME_VALUE':
    //   if (action.payload.filterKey === 'teaName') {
    //     return {
    //       ...state,
    //       currentTextValue: '',
    //       teaName: action.payload.value,
    //     };
    //   }
    //   return {
    //     ...state,
    //     currentTextValue: '',
    //     [action.payload.filterKey]: [
    //       ...state[action.payload.filterKey],
    //       action.payload.value,
    //     ],
    //   };

    // case 'REMOVE_TEA_FILTER_SOME_VALUE':
    //   if (action.payload.filterKey === 'teaName') {
    //     return {
    //       ...state,
    //       teaName: '',
    //     };
    //   }
    //   return {
    //     ...state,
    //     [action.payload.filterKey]: state[action.payload.filterKey].filter(
    //       (el) => {
    //         console.log(el, action.payload.value);
    //         return el !== action.payload.value;
    //       },
    //     ),
    //   };

    case 'OPEN_FILTER_MENU':
      return {
        ...state,
        isFilterMenuOpened: true,
      };

    case 'CLOSE_FILTER_MENU':
      return {
        ...state,
        isFilterMenuOpened: false,
      };

    default:
      return state;
  }
}

export default teaFilter;
