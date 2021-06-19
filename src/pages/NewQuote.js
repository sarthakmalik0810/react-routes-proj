import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
}

export default NewQuote;
