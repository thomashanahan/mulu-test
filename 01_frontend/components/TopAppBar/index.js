
import { memo } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from 'components/Logo';
import Avatar from 'components/TopAppBar/Avatar';
import CustomLink from 'components/UI/Buttons/CustomLink';
import PAGES from 'constants/links/pages';

const useStyles = makeStyles(theme => ({
  appBar: {
    width: '100%',
    boxShadow: 'none',
    display: 'flex',
    flexShrink: 0,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.custom.palette.lightGreen}`
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: theme.custom.layout.topAppBarHeight,
    padding: theme.spacing(1, 6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 3)
    }
  },
  logo: {
    paddingLeft: theme.spacing(2)
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const { isAuthenticated = false } = useSelector(state => state.auth, {});

  return (
    <AppBar
      position='fixed'
      className={classes.appBar}>
      <Toolbar className={classes.flexContainer}>
        <CustomLink href={PAGES.HOME.url} >
          <Logo className={classes.logo} width={70} height={70} />
        </CustomLink>
        {
          isAuthenticated &&
          <Avatar />
        }
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);
