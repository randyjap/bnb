import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  updateFilter: bounds => dispatch(updateFilter(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
