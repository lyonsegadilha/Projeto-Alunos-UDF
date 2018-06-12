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


// Import custom components
import renderText from '/common/form/renderText';


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

const Product = props => 
{

    const {handleSubmit, onSubmit, classes} = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    title="Crie uma nova conta"
                />
                <CardContent>
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <Field
                            type="text"
                            name="nome"
                            component={renderText}
                            label="Nome"

                        />
                        <br />
                        <Field
                            type="text"
                            name="num_documento"
                            component={renderText}
                            label="Número do Documento(Rg, Cpf, Cnh)"

                        />
                
                    </form>
                </CardContent>

            </Card>
        </div>
    )
};              

const validateSignUp = values => {
    const errors = {};

    const requiredFields = [
        'nome',
        'num_documento',
        
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '(Este ' + field + ' campo é obrigatório.)';
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '(Endereço de email inválido.)';
    }
    return errors
};

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default reduxForm({
    form: 'SignUpForm', // a unique identifier for this form
    validate: validateSignUp // ←Callback function for client-side validation
})(withStyles(styles)(SignUpForm))