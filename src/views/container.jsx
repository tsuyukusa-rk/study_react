/*
* view
*/
import * as presentational from './presentational.jsx';
// Container Components
export class FormApp extends React.Component {
  render() {
    return (
      <div>
        <presentational.FormInput handleClick={this.props.onClick} />
        <presentational.FormDisplay data={this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};
