import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

function Post(props) {

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {props.articles.map((el, index) => (
        <li key={index}>{el.title}</li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, {getData}) (Post);