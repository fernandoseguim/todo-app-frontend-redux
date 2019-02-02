import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, getTodoList, addTodoItem } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.getTodoList();
  }

  keyHandler(event) {
    const { getTodoList, addTodoItem, description } = this.props;
    if (event.key === 'Enter') {
      event.shiftKey ? getTodoList() : addTodoItem(description);
    } else if (event.key === 'Escape') {
      this.props.handleClear();
    }
  }

  render() {
    const { getTodoList, addTodoItem, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => addTodoItem(description)}
          />
          <IconButton
            style="info"
            icon="search"
            onClick={() => getTodoList()}
          />
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, getTodoList, addTodoItem }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
