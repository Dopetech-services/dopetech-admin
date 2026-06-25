import React from 'react'
import './styles.css'
import './firebase'

const cards = [
  { title: 'Open Jobs', value: 12 },
  { title: 'Awaiting Assignment', value: 5 },
  { title: 'Urgent Jobs', value: 2 },
  { title: 'Service Reports Due', value: 4 },
]

const jobs = [
  { id: 'JOB-001', title: 'Ricoh printer fault diagnosis', status: 'pending', customer: 'ABC Office' },
  { id: 'JOB-002', title: 'Laptop motherboard issue', status: 'assigned', customer: 'John M.' },
  { id: 'JOB-003', title: 'CCTV installation request', status: 'quotation_pending', customer: 'Shop owner' },
]

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>DopeTech Service Admin</h1>
          <p>admin@dopetechservice.co • Kitwe MVP • Firebase connected starter</p>
        </div>
        <button className="primary">New Technician</button>
      </header>

      <section className="hero">
        <div>
          <h2>DopeTech Service</h2>
          <p>Get the Best and Affordable Technical Services</p>
          <p className="muted">Printer repair • IT support • mobile phone repair • networking • CCTV • office equipment</p>
        </div>
      </section>

      <section className="grid">
        {cards.map(c => (
          <div className="card" key={c.title}>
            <div className="label">{c.title}</div>
            <div className="value">{c.value}</div>
          </div>
        ))}
      </section>

      <section className="panel">
        <h2>Technician Assignment + Service Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Title</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.customer}</td>
                <td>{job.status}</td>
                <td>
                  <button className="primary small">Assign Tech</button>
                  <button className="ghost small">Service Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="panel">
        <h2>MVP Rules</h2>
        <ul>
          <li>Manual technician assignment by admin</li>
          <li>External technician marketplace opens after 24 hours without admin acceptance</li>
          <li>Kitwe fixed city for MVP</li>
          <li>Payment placeholders: cash, bank transfer, Airtel Money, MTN MoMo, Zamtel Kwacha</li>
        </ul>
      </section>
    </div>
  )
}
