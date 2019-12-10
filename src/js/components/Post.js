import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

function Post() {

  useEffect(() => {
    getData();
  
  }, []);

  return null;
}

export default connect(null, {getData}) (Post);