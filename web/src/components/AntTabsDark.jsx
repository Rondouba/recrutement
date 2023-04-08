/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';

const styles = {
  selectedTabIndicatorColor: '#9BB1F0',
  selectedTabFontWeight: 500,
  selectedTabBorder: '5px solid #9BB1F0',
  tabsContainerHeight: 45,
};

const DarkAntTabs = styled(Tabs)({
  height: styles.tabsContainerHeight,
  '& .MuiTabs-indicator': {
    backgroundColor: styles.selectedTabIndicatorColor,
  },
  '& .MuiTabs-indicator:hover': {
    backgroundColor: styles.selectedTabIndicatorColor,
  },
});

const DarkAntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: 'white',
    textTransform: 'none',
    minWidth: 0,
    overflowY: 'visible',
    marginTop: 1,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&.Mui-selected': {
      color: 'white',
      borderBottom: styles.selectedTabBorder,
      fontWeight: styles.selectedTabFontWeight,
    },
  }),
);

export { DarkAntTab, DarkAntTabs };
