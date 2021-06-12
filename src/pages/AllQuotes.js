import QuoteList from '../components/quotes/QuoteList'

export const DUMMY_QUOTES = [
  { id: 'q1', author: 'Sarthak', text: 'Learning React is fun!'},
  { id: 'q2', author: 'Malik', text: 'Learning React is great' }
]

function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes
