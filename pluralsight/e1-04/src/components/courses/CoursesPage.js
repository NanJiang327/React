import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  }
  
  handleChange = event => {
    const course = {...this.state.course, title: event.target.value}
    this.setState({
      course
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCoures(this.state.course)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="save"/>
        {
          this.props.courses.map((course,id) => {
            return (
              <div key={id}>{course.title}</div>
            )
          })
        }
      </form>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func,
  createCoures: PropTypes.func.isRequired,
  courses: PropTypes.array,
  action: PropTypes.object
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCoures: course => dispatch(courseActions.createCourse(course))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
