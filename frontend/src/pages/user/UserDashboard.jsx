import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Calendar, 
  FileBarChart, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  PlusCircle,
  Image as ImageIcon
} from 'lucide-react';

// Production Imports
import { useAuth } from '../../context/AuthContext';
import { getMyBookings } from '../../utils/api';
import useAutoRefresh from '../../hooks/useAutoRefresh';
import Navbar from '../../components/common/Navbar'; // Using your existing Navbar
import StatusBadge from '../../components/common/StatusBadge'; // Using your existing Badge
import '../Dashboard.css';

const UserDashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = useCallback(async (showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const res = await getMyBookings();
      setBookings(res.data || []);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
    } finally {
      if (showLoader) setLoading(false);
    }
  }, []);

  // Initial Fetch
  useEffect(() => { 
    fetchBookings(); 
  }, [fetchBookings]);

  // Auto Refresh every 10 seconds (Logic from your original file)
  useAutoRefresh(() => fetchBookings(false), 10000);

  const stats = {
    pending: bookings.filter((b) => b.status === 'pending').length,
    approved: bookings.filter((b) => b.status === 'approved').length,
    rejected: bookings.filter((b) => b.status === 'rejected').length,
    total: bookings.length
  };

  return (
    <div className="dashboard-wrapper">
      <Navbar />

      <main className="dashboard-container">
        {/* Welcome Header */}
        <div className="welcome-header">
          <h2>
            Welcome, <span className="highlight-text">{user?.name}</span> 👋
          </h2>
          <p>
            {user?.college_name} — <span className="location-tag">B V Jagadish Multimedia Hall</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard label="Total Requests" value={stats.total} color="indigo" icon={<ClipboardCheck />} />
          <StatCard label="Pending" value={stats.pending} color="amber" icon={<Clock />} />
          <StatCard label="Approved" value={stats.approved} color="emerald" icon={<CheckCircle2 />} />
          <StatCard label="Rejected" value={stats.rejected} color="rose" icon={<XCircle />} />
        </div>

        {/* Action Grid */}
        <div className="actions-grid">
          <ActionCard 
            title="New Booking Request" 
            desc="Submit a request for the auditorium" 
            icon={<PlusCircle />} 
            variant="blue" 
            to="/user/new-booking" 
          />
          <ActionCard 
            title="View Calendar" 
            desc="See all approved bookings" 
            icon={<Calendar />} 
            variant="white" 
            to="/user/calendar" 
          />
          <ActionCard 
            title="My Reports" 
            desc="Download your booking history" 
            icon={<FileBarChart />} 
            variant="orange" 
            to="/user/reports" 
          />
        </div>

        {/* Recent Visual Cards */}
        <section className="recent-visual-section">
          <div className="section-title">
            <h3>Recent Requests</h3>
            <p>Your most recent booking submissions will appear here.</p>
          </div>

          <div className="poster-grid">
            {loading ? (
              [...Array(3)].map((_, i) => <div key={i} className="skeleton-card" />)
            ) : bookings.length === 0 ? (
              <div className="empty-state">
                <ClipboardCheck size={48} />
                <p>No booking requests found.</p>
                <Link to="/user/new-booking" className="create-link">Create your first one →</Link>
              </div>
            ) : (
              bookings.slice(0, 3).map((booking) => (
                <EventPoster key={booking.id} booking={booking} />
              ))
            )}
          </div>
        </section>

        {/* Full Table History */}
        <section className="history-table-section">
          <div className="table-header">
            <h3>Full Request History</h3>
            <Link to="/user/my-bookings" className="view-all">View All</Link>
          </div>
        </div>

        {/* Actions */}
        <div className="dashboard-actions">
          <Link to="/user/new-booking" className="card card-hover action-card primary">
            <span className="action-icon">📋</span>
            <div>
              <strong>New Booking Request</strong>
              <p>Submit a request for the auditorium</p>
            </div>
          </Link>

          <Link to="/user/calendar" className="card card-hover action-card">
            <span className="action-icon">📅</span>
            <div>
              <strong>View Calendar</strong>
              <p>See all approved bookings</p>
            </div>
          </Link>

          <Link to="/user/reports" className="card card-hover action-card">
            <span className="action-icon">📊</span>
            <div>
              <strong>My Reports</strong>
              <p>Download your booking history</p>
            </div>
          </Link>
        </div>

        {/* Recent */}
        <div className="recent-section card">
          <h3>Recent Requests</h3>

          {loading ? (
            <p>Loading...</p>
          ) : recent.length === 0 ? (
            <p className="empty-msg">
              No booking requests yet. <Link to="/user/new-booking">Create one →</Link>
            </p>
          ) : (
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((b) => (
                  <tr key={b.id}>
                    <td>{b.title}</td>
                    <td>{new Date(b.event_date).toLocaleDateString()}</td>
                    <td>{b.start_time} – {b.end_time}</td>
                    <td><StatusBadge status={b.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
    
  );
};

// Internal Sub-components for better organization
function StatCard({ label, value, color }) {
  return (
    <div className={`stat-card-modern border-${color}`}>
      <p className={`stat-value color-${color}`}>{value}</p>
      <p className="stat-label-modern">{label}</p>
    </div>
  );
}

function ActionCard({ title, desc, icon, variant, to }) {
  return (
    <Link to={to} className={`action-card-modern variant-${variant}`}>
      <div className="action-icon-wrapper">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </Link>
  );
}

const EventPoster = ({ booking }) => (
  <div className="poster-card">
    <div className="poster-top">
      {booking.poster_url ? (
        <img src={booking.poster_url} alt="" className="poster-img" />
      ) : (
        <div className="poster-placeholder">
          <ImageIcon size={32} className="icon-fade" />
          <p>BOOKING REQUEST</p>
          <h4>{booking.title}</h4>
          <div className="date-pill">
            {new Date(booking.event_date).toLocaleDateString('en-GB')}
          </div>
        </div>
      )}
    </div>
    <div className="poster-bottom">
      <StatusBadge status={booking.status} />
      <p className="poster-title-text">{booking.title}</p>
    </div>
  </div>
);

export default UserDashboard;
