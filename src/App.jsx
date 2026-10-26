/* useState manages changing values, such as the counter. */
import { useState } from 'react'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [searchTerm, setSearchTerm] = useState('')
  const menuItems = [
    'Dashboard',
    'Students',
    'Teachers',
    'Classes',
    'Attendance',
    'Marks & Results',
  ]

  const students = [
    { id: 'ST001', name: 'Amanda Dlamini', className: 'Form 1A', status: 'Active' },
    { id: 'ST002', name: 'Sibusiso Mamba', className: 'Form 2B', status: 'Active' },
    { id: 'ST003', name: 'Thandiwe Nkosi', className: 'Form 3A', status: 'Pending' },
    { id: 'ST004', name: 'Sipho Mkhonta', className: 'Form 1B', status: 'Active' },
  ]

  const filteredStudents = students.filter((student) => {
  const search = searchTerm.toLowerCase().trim()

  return (
    student.name.toLowerCase().includes(search) ||
    student.id.toLowerCase().includes(search)
  )
})

  /* return describes what the interface React should render.*/
  return (
  
    <div className="app">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-icon">S</div>
            <div>
              <h2>SchoolHub</h2>
              <span>Management System</span>
            </div>
          </div>

            <p className="menu-label">MAIN MENU</p>

            <nav className="navigation">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className={`nav-item ${activePage === item ? 'active' : ''}`}
                    onClick={() => setActivePage(item)}>
                  
                    {item === 'Dashboard' ? '▦' :
                    item === 'Students' ? '♙' :
                    item === 'Teachers' ? '♧' :
                    item === 'Classes' ? '▤' :
                    item === 'Attendance' ? '✓' : '▣'}
                    <span>{item}</span>
                  </button>
                ))}
          
            </nav>

                  <div className="sidebar-footer">
                    <div className="avatar">AD</div>
                    <div>
                      <strong>Admin User</strong>
                      <span>School Administrator</span>
                    </div>
                  </div>
       </aside>

          <main className="main-content">
            <header className="topbar">
              <div>
                <p className="breadcrumb">School / {activePage}</p>
                <h1>{activePage}</h1>
              </div>
              <div className="topbar-right">
                <span className="school-year">Academic Year 2026</span>
                <div className="avatar">AD</div>
              </div>
            </header>

            {activePage === 'Dashboard' ?
              (
                  <>
                    <section className="welcome">
                      <div>
                        <h2>Welcome back, Administrator!</h2>
                        <p>Here is an overview of your school's activities.</p>
                      </div>
                      <span className="welcome-icon">🎓</span>
                    </section>

                    <section className="stats-grid">
                      <article className="stat-card">
                        <div className="stat-icon blue">♙</div>
                        <p>Total Students</p>
                        <h2>1,240</h2>
                        <span>Registered learners</span>
                      </article>

                      <article className="stat-card">
                        <div className="stat-icon green">♧</div>
                        <p>Total Teachers</p>
                        <h2>64</h2>
                        <span>Teaching staff</span>
                      </article>

                      <article className="stat-card">
                        <div className="stat-icon orange">▤</div>
                        <p>Total Classes</p>
                        <h2>32</h2>
                        <span>Across all forms</span>
                      </article>

                      <article className="stat-card">
                        <div className="stat-icon purple">✓</div>
                        <p>Attendance</p>
                        <h2>94.5%</h2>
                        <span>Today's attendance</span>
                      </article>
                    </section>

                    <section className="content-card">
                      <div className="section-heading">
                        <div>
                          <h2>Recent Students</h2>
                          <p>A quick look at student records</p>
                        </div>
                        <button
                          className="primary-button"
                          onClick={() => setActivePage('Students')}
                        >
                          View Students →
                        </button>
                      </div>

                      <div className="table-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th>Student ID</th>
                              <th>Student Name</th>
                              <th>Class</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredStudents.map((student) => (
                              <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.className}</td>
                                <td>
                                  <span className={`status ${student.status.toLowerCase()}`}>
                                    {student.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    <section className="content-card quick-actions">
                      <h2>Quick Actions</h2>
                      <div className="action-grid">
                        <button onClick={() => setActivePage('Students')}>
                          <span>＋</span>
                          Register Student
                        </button>
                        <button onClick={() => setActivePage('Attendance')}>
                          <span>✓</span>
                          Record Attendance
                        </button>
                        <button onClick={() => setActivePage('Marks & Results')}>
                          <span>▣</span>
                          Enter Marks
                        </button>
                      </div>
                    </section>
                  </>
                ) : (
              
                  activePage === 'Students' ?
                  (
                      <section className="content-card">
                        <div className="section-heading">
                          <div>
                            <h2>Student Records</h2>
                            <p>View students registered at your school.</p>
                          </div>
                        </div>
                           {/* Search box for students */}
                            <input
                              type="text"
                              placeholder="Search by student name or ID..."
                              value={searchTerm}
                              onChange={(event) => setSearchTerm(event.target.value)}
                            />

                        <div className="table-wrapper">
                          <table>
                            <thead>
                              <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            
                              <tbody>
                                {filteredStudents.length > 0 ? (
                                  filteredStudents.map((student) => (
                                    <tr key={student.id}>
                                      <td>{student.id}</td>
                                      <td>{student.name}</td>
                                      <td>{student.className}</td>
                                      <td>
                                        <span className={`status ${student.status.toLowerCase()}`}>
                                          {student.status}
                                        </span>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="4">
                                      No students found. Try another search.
                                    </td>
                                  </tr>
                                )}
                              </tbody>

                          </table>
                        </div>
                      </section>

                    ) : 
                        (
                          <section className="content-card page-placeholder">
                            <div className="stat-icon blue">▤</div>
                            <h2>{activePage}</h2>
                            <p>
                              This section is ready for us to build.
                              We'll add its features step by step.
                            </p>
                            <button
                              className="primary-button"
                              onClick={() => setActivePage('Dashboard')}
                            >
                              ← Back to Dashboard
                            </button>
                          </section>
                        )

                )}
        </main>
      </div>
  )
}

export default App
