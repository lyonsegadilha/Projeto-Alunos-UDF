import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import {withStyles} from 'material-ui/styles';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';

// Import custom components
import renderText from '../common/form/renderText';

const styles = {
    root: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '15%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    card: {
        padding: 20,
        overflow: 'auto'
    },
    cardHeader: {
        textAlign: 'center'
    },
    btnDiv: {
        textAlign: 'center'
    },
    btn: {
        marginTop: 21,
    }
};

const SignUpForm = props => {

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
                        <br />
                        <Field
                            type="text"
                            name="endereco"
                            component={renderText}
                            label="Endereço"

                        />
                        <br />
                        <Field
                            type="text"
                            name="telefone"
                            component={renderText}
                            label="Telefone"

                        />
                        <br />
                        <Field
                            type="text"
                            name="cargo"
                            component={renderText}
                            label="Cargo"

                        />
                        <br />
                        <Field
                            type="text"
                            name="turno"
                            component={renderText}
                            label="Turno"

                        />
                        <br />
                        <Field
                            type="text"
                            name="email"
                            component={renderText}
                            label="Email"
                        />
                        <br />
                        <Field
                            type="password"
                            name="password"
                            component={renderText}
                            label="Senha"

                        />
                        <br />
                        <div className={classes.btnDiv}>
                            <Button className={classes.btn} type="submit" raised color="primary">Cadastrar</Button>
                            <p>Já possui uma conta? <Link to={'/'}>Login</Link>.</p>
                        </div>
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
        'endereco',
        'telefone',
        'cargo',
        'turno',
        'email',
        'password'
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