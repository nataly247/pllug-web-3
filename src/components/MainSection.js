import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from './TodoList' // should be container

const passProps = {
  filteredTodos: [{
    id: 0,
    completed: false,
    text: 'Use Redux'
  }],
  actions: {
    completeTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {}
  }
};

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount &&
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList {...passProps} />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;
