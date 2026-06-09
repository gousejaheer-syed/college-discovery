export default function Home() {
  return (
    <main style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: '#0a0a0a',
      color: 'white',
      minHeight: '100vh',
      padding: '60px 40px'
    }}>
      {/* Header */}
      <div style={{textAlign: 'center', marginBottom: '60px'}}>
        <h1 style={{
          fontSize: '3rem',
          background: 'linear-gradient(to right, #38bdf8, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          🎓 College Discovery Platform
        </h1>
        <p style={{color: '#64748b', fontSize: '1.1rem'}}>
          Find, explore and compare top colleges in India
        </p>
        <p style={{color: '#475569', fontSize: '0.9rem', marginTop: '8px'}}>
          Built by <span style={{color: '#38bdf8'}}>Syed Gouse Jaheer</span> • Next.js + PostgreSQL + Prisma
        </p>
      </div>

      {/* Stats Row */}
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        marginBottom: '60px',
        flexWrap: 'wrap'
      }}>
        {[
          {number: '5+', label: 'Colleges'},
          {number: '3', label: 'API Endpoints'},
          {number: '100%', label: 'Live Data'},
        ].map((stat, i) => (
          <div key={i} style={{
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            border: '1px solid #1e3a5f',
            borderRadius: '16px',
            padding: '24px 40px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8'}}>{stat.number}</div>
            <div style={{color: '#64748b', fontSize: '0.9rem'}}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* API Cards */}
      <h2 style={{
        textAlign: 'center',
        color: '#94a3b8',
        marginBottom: '30px',
        fontSize: '1.2rem',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        📡 Live API Endpoints
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {[
          {
            title: '🏫 All Colleges',
            desc: 'Get all colleges with search & filter support',
            url: '/api/colleges',
            tag: 'GET'
          },
          {
            title: '🔍 Search Colleges',
            desc: 'Search colleges by name',
            url: '/api/colleges?search=IIT',
            tag: 'GET'
          },
          {
            title: '📍 Filter by Location',
            desc: 'Filter colleges by state or city',
            url: '/api/colleges?location=Telangana',
            tag: 'GET'
          },
          {
            title: '📄 College Detail',
            desc: 'Get full details of a single college',
            url: '/api/colleges/1',
            tag: 'GET'
          },
          {
            title: '⚖️ Compare Colleges',
            desc: 'Compare 2-3 colleges side by side',
            url: '/api/colleges/compare?ids=1,2',
            tag: 'GET'
          },
          {
            title: '💰 Filter by Fees',
            desc: 'Find colleges under a fee range',
            url: '/api/colleges?maxFees=200000',
            tag: 'GET'
          },
        ].map((api, i) => (
          <a key={i} href={api.url} style={{textDecoration: 'none'}}>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              border: '1px solid #1e3a5f',
              borderRadius: '16px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                <h3 style={{color: 'white', margin: 0, fontSize: '1rem'}}>{api.title}</h3>
                <span style={{
                  background: '#064e3b',
                  color: '#4ade80',
                  padding: '2px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>{api.tag}</span>
              </div>
              <p style={{color: '#64748b', fontSize: '0.85rem', margin: '0 0 12px'}}>{api.desc}</p>
              <code style={{
                background: '#0f172a',
                color: '#38bdf8',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                display: 'block'
              }}>{api.url}</code>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div style={{textAlign: 'center', marginTop: '60px', color: '#334155', fontSize: '0.85rem'}}>
        <p>Built for The AI Signal Internship Task • Backend Engineer Role • Track B</p>
      </div>
    </main>
  )
}