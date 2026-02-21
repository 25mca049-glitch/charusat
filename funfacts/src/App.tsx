import { useEffect, useState } from 'react'
import './App.css'

type Fact = {
  id: string
  text: string
  source: string
  source_url: string
  language: string
  permalink: string
}

const RANDOM_FACT_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'

function App() {
  const [fact, setFact] = useState<Fact | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFact = () => {
    setLoading(true)
    setError(null)
    fetch(RANDOM_FACT_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: Fact) => setFact(data))
      .catch((e) => setError('Failed to load fact. Try again!'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <h1>💡 Useless Facts</h1>
        <p>Discover random fascinating (and useless!) facts</p>
      </header>

      <main className="main-content">
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading a fact...</p>
          </div>
        )}

        {error && <div className="error-box">{error}</div>}

        {fact && (
          <div className="fact-card">
            <div className="fact-text">{fact.text}</div>
            <div className="fact-meta">
              <p>
                <strong>Source:</strong>{' '}
                <a href={fact.source_url} target="_blank" rel="noreferrer">
                  {fact.source}
                </a>
              </p>
              <p>
                <small>
                  <a href={fact.permalink} target="_blank" rel="noreferrer" className="permalink">
                    View on uselessfacts.jsph.pl →
                  </a>
                </small>
              </p>
            </div>
          </div>
        )}

        <button
          className="refresh-btn"
          onClick={fetchFact}
          disabled={loading}
          aria-label="Get another fact"
        >
          {loading ? 'Loading...' : 'Get Another Fact'}
        </button>
      </main>

      <footer className="footer">
        <p>Data from uselessfacts.jsph.pl API</p>
      </footer>
    </div>
  )
}

export default App
