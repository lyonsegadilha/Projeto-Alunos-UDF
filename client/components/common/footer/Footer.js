import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    legal: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '97.6%',
        borderTop: '1px solid #eee',
        padding: '15px',
        overflow: 'hidden',
        textAlign: 'center'
    }
});
class Footer extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.legal}>
                <div class="copyright">
                    © 2018 <a href="javascript:void(0);">Alunos UDF</a>.
                </div>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)