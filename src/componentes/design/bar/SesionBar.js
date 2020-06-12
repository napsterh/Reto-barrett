import React, { Component } from 'react'
import { Toolbar, Typography, Button, IconButton, Avatar, Drawer } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import fotoUsuarioTemp from '../../../logo.svg';

const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    grow: {
        flexGrow: 1
    },
    avatarSize: {
        width: 40,
        heigth: 40
    },
    listitemtext: {
        fontSize: "14px",
        fontWeight: 600,
        paddinLeft: "15px",
        color: "#212121"
    },
    list: {
        width: 250
    }
});


class SesionBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Toolbar>
                    <IconButton color="inherit">
                        <i className="material-icons">menu</i>
                    </IconButton>
                    <Typography variant="h6">
                        Henri Barrett
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit">rome</Button>
                        <IconButton color="inherit" component={Link} to="">
                            <i className="material-icons">mail_outline</i>
                        </IconButton>
                        <Button color="inherit">
                            Close
                        </Button>
                        <Avatar
                            src={fotoUsuarioTemp}
                        >
                        </Avatar>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton color="inherit"
                        >
                            <i className="material-icons">more_vert</i>
                        </IconButton>
                    </div>
                </Toolbar>
            </div>
        )
    }
}


export default withStyles(styles)(SesionBar);