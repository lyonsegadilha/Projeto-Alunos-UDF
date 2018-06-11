import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import SettingsIcon from 'material-ui-icons/Settings';
import HelpIcon from 'material-ui-icons/Help';
import NotificationsIcon from 'material-ui-icons/Notifications';
import LocalTaxiIcon from 'material-ui-icons/LocalTaxi';
import {Link} from 'react-router-dom'

const drawerWidth = 250;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
});

const MiniDrawer = (props) => {

    let {navDrawerOpen} = props;
    const classes = props.classes;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
            }}
            open={navDrawerOpen}
        >
            <div className={classes.drawerHeader}/>
            <Divider />

            <div className={classes.root}>
                <Avatar alt="User" src="/img/avatar5.png" className={classNames(classes.avatar, classes.bigAvatar)}/>
                <Typography component="p" className={classes.avatar}>
                    João da Silva
                </Typography>
                <Typography component="span" className={classes.avatar}>
                    joaodasilva@gmail.com
                </Typography>
            </div>
            <div className="box" style={{background: '#eee', padding: '8px 16px'}}>
                MENU DE NAVEGAÇÃO
            </div>

            <List>
                <ListItem button component={Link} to="/dashboard">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Menu principal"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuários"/>
                </ListItem>
                <ListItem button component={Link} to="/Aluno">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cadastro de Aluno" />
                </ListItem>
                <ListItem button component={Link} to="/Visitantes">
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cadastro de Visitantes"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notificações"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Controle de acesso"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ajuda"/>
                </ListItem>
            </List>
        </Drawer>
    )
};

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    navDrawerOpen: PropTypes.bool
};

export default withStyles(styles)(MiniDrawer)