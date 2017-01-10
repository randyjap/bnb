import { connect } from 'react-redux';
import BenchForm from './bench_form';

const mapStateToProps = (state, ownProps) => ({
  lat: (ownProps.location.query.latLng.slice(1, -1).split(", ")[0]),
  lng: (ownProps.location.query.latLng.slice(1, -1).split(", ")[1])
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
