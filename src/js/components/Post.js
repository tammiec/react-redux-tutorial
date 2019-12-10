import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

export function Post(props) {

  useEffect(() => {
    props.getData();
  }, [props]);

  return (
    <ul>
      {props.articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, { getData })(Post);