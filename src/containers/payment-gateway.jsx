import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    border: '2px solid #b7b7b7',
    width: '100%',
    marginTop: '-.8%',
    fontSize: 35,
    color: '#8b8b8b',
    backgroundColor: '#eee',
  },
  root: {
    width: '19%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    float: 'left',
    margin: '2.5%'
  },
  table: {
    border: '2px solid #b7b7b7',
    borderCollapse: 'collapse',
    color: '#8b8b8b'
  },
  tr: {
    border: '2px solid #b7b7b7',
  },
  tr1: {
    border: '2px solid #b7b7b7',
    backgroundColor: '#eee',
    paddingTop: '3%',
    paddingBottom: '8%'
  },
  container: {
      display: 'flex',
      justifyContent: 'center'
  },
  recomendado: {
    backgroundColor: '#ff6a6b',
    textAlign: 'center',
    color: 'white',
    fontWeight: 600
  }
});

function PaymentGateway(props) {
  const { classes } = props;

  return (
      <div className={classes.container}>
          <div className={classes.root}>
        <table className={classes.table}>
        <tr className={classes.tr1}>
            <th><p style={{marginBottom: 5, fontSize: 40}}>Clásico</p><p style={{marginTop: 0, fontWeight: 'lighter', fontSize: 14}}>Espacio simple</p></th>
        </tr>
        <tr className={classes.tr}>
            <td style={{padding: 19}}>Tu eliges a tu diseñador.Este te propondrá 3 conceptos iniciales de los cuales elegirás el que más te guste para comenzar a trabajar.
                <ul>
                    <li>Un espacio simple hasta 25 M2</li>
                    <li>Tú eliges a uno de los 3 diseñadores que te sugerirá Dekoclic</li>
                    <li>3 conceptos iniciales</li>
                    <li>Collage Final</li>
                    <li>Plano de distribución</li>
                </ul>
            </td>
        </tr>
        </table>
        <Button variant="outlined" className={classes.button}>
            $199
        </Button>
        </div>
        <div className={classes.root}>
            <table className={classes.table} style={{border: '2px solid #ff6a6b'}}>
            <tr className={classes.recomendado}>
                <p style={{margin: 10}}>Recomendado</p>
            </tr>
            <tr className={classes.tr1} style={{border: '2px solid #ff6a6b'}}>
            <th><p style={{marginBottom: 5, fontSize: 40}}>Premium</p><p style={{marginTop: 0, fontWeight: 'lighter', fontSize: 14}}>Espacio compuesto</p></th>
            </tr>
            <tr className={classes.tr} style={{border: '2px solid #ff6a6b'}}>
            <td style={{padding: 19}}>Tu eliges a tu diseñador.Este te propondrá 3 conceptos iniciales de los cuales elegirás el que más te guste para comenzar a trabajar.
                <ul>
                    <li>Un espacio simple hasta 50 M2</li>
                    <li>Tú eliges a uno de los 3 diseñadores que te sugerirá Dekoclic</li>
                    <li>3 conceptos iniciales</li>
                    <li>Collage Final</li>
                    <li>Plano de distribución</li>
                    <li>Lista de Compras</li>
                </ul>
            </td>
            </tr>
            </table>
            <Button variant="outlined" className={classes.button} style={{border: '2px solid #ff6a6b'}}>
                $299
            </Button>
            </div>
            <div className={classes.root}>
        <table className={classes.table}>
        <tr  className={classes.tr1}>
        <th><p style={{marginBottom: 5, fontSize: 40}}>Exclusivo</p><p style={{marginTop: 0, fontWeight: 'lighter', fontSize: 14}}>Espacio simple o compuesto</p></th>
        </tr>
        <tr className={classes.tr}>
        <td style={{padding: 19}}>Tu eliges a tu diseñador.Este te propondrá 3 conceptos iniciales de los cuales elegirás el que más te guste para comenzar a trabajar.
            <ul>
                <li>Un espacio simple o compuesto, hasta 50 M2</li>
                <li>Tú eliges a uno de los 3 diseñadores que te sugerirá Dekoclic</li>
                <li>3 conceptos iniciales</li>
                <li>Collage Final</li>
                <li>Plano de distribución</li>
                <li>Lista de Compras</li>
            </ul>
        </td>
        </tr>
        </table>
        <Button variant="outlined" className={classes.button}>
            $399
        </Button>
        </div>
    </div>
  );
}

PaymentGateway.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaymentGateway);