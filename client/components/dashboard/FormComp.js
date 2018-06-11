import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {cyan, pink, purple, orange} from 'material-ui/colors';
import {AddShoppingCart, ThumbUp, Assessment, Face} from 'material-ui-icons';
import SummaryBox from './SummaryBox';
import Product from './Product';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: theme.spacing.unit * 3,
    }),
});

const FormComp = props => {
    const classes = props.classes;
    
        return(
            <div>
 
                <h2>Cadastro de Aluno</h2>
                <hr />
                 
                <label>Nome: </label>
                <br /> <input type="text"  />
                <br />
 
                <label>Rgm: </label>
                <br /> <input type="text"  />
                <br />

                <label>Número do documento: </label>
                <br /> <input type="text"  />
                <br />

                <label>Endereco: </label>
                <br /> <input type="text"  />
                <br />

                <label>Email: </label>
                <br /> <input type="text"  />
                <br />

                <label>Telefone: </label>
                <br /> <input type="text"  />
                <br />

                <label>Curso: </label>
                <br /> <input type="text"  />
                <br />
                
                <label>Turno: </label>
                <br /> <input type="text"  />
                <br />
 
                <input type="button" value="Cadastrar" />
 
                <hr />
            </div>
        );
    }

FormComp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComp)