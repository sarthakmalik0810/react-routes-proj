import { Fragment } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

function QuoteDetail() {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
