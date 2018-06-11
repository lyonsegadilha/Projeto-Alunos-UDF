import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {cyan, purple, orange} from 'material-ui/colors';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Divider from 'material-ui/Divider';
import Wallpaper from 'material-ui-icons/Wallpaper';

const styles = theme => ({
    root: {
        paddingTop: 0
    },
    subheader: {
        fontSize: 24,
        backgroundColor: cyan[600],
        color: '#FFFFFF'
    }
});

const Product = props => {
    const classes = props.classes;
    
        return(
            <div>
 
                <h2>Cadastro de Visitantes</h2>
                <hr />
                 
                <label>Nome: </label>
                <br /> <input type="text"  />
                <br />
 
               
                <label>Número do documento: </label>
                <br /> <input type="text"  />
                <br />

                
                <label>Telefone: </label>
                <br /> <input type="text"  />
                <br />

                 <label>Motivo da visita: </label>
                <br /> <input type="text"  />
                <br />
                
                <input type="button" value="Cadastrar" />
 
                <hr />
            </div>
        );
    }

    Product.propTypes = {
        classes: PropTypes.object.isRequired,
    }
    
    export default withStyles(styles)(Product)