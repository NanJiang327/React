import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Carousel from './components/Carousel'
import Author from './components/Author';
import { actionCreators } from './store';
import { BackTop } from './style';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<Carousel />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					{/* <Author /> */}
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Back to top</BackTop> : null}
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}


const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);