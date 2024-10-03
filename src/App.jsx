import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Landing from './components/landing'
import Quiz from './components/quiz'
import Result from './components/result'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  )
}

export default App 
