import { useCallback, useEffect, useState } from 'react';
import { getAllBookings } from '../../utils/api';
import Navbar from '../../components/common/Navbar';
import PageBackButton from '../../components/common/PageBackButton';
import StatusBadge from '../../components/common/StatusBadge';
import useAutoRefresh from '../../hooks/useAutoRefresh';
import '../Dashboard.css';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ college: '', status: '', from: '', to: '' });
  const [appliedFilters, setAppliedFilters] = useState({ college: '', status: '', from: '', to: '' });

  const fetchBookings = useCallback(async (f, showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const res = await getAllBookings(f);
      setBookings(res.data);
    } finally {
      if (showLoader) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings(appliedFilters);
  }, [fetchBookings, appliedFilters]);

  useAutoRefresh(() => fetchBookings(appliedFilters, false), 10000);

  const handleChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedFilters(filters);
  };

  const handleReset = () => {
    const cleared = { college: '', status: '', from: '', to: '' };
    setFilters(cleared);
    setAppliedFilters(cleared);
  };

  return (
    <div>
      <Navbar />

      <div className="dashboard-page">
        <PageBackButton fallback="/admin/dashboard" />

        <div className="page-header">
          <h2>All Bookings</h2>
          <p>View and filter all booking requests across colleges.</p>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar card">
          <form onSubmit={handleSearch} className="filter-form">
            <select
              className="input"
              name="college"
              value={filters.college}
              onChange={handleChange}
            >
              <option value="">All Colleges</option>
              <option>College A</option>
              <option>College B</option>
              <option>College C</option>
            </select>

            <select
              className="input"
              name="status"
              value={filters.status}
              onChange={handleChange}
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <input
              className="input"
              type="date"
              name="from"
              value={filters.from}
              onChange={handleChange}
            />

            <input
              className="input"
              type="date"
              name="to"
              value={filters.to}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary">
              Filter
            </button>

            <button
              type="button"
              className="btn btn-outline"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>

        {/* TABLE */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card">
            <p className="result-count">
              {bookings.length} record(s) found
            </p>

            <table className="bookings-table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Note</th>
                  <th>Submitted By</th>
                </tr>
              </thead>

              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="empty-msg">
                      No records found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr key={b.id}>
                      <td><strong>{b.college_name}</strong></td>
                      <td>{b.title}</td>
                      <td>{new Date(b.event_date).toLocaleDateString()}</td>
                      <td>{b.start_time} – {b.end_time}</td>
                      <td>
                        <StatusBadge status={b.status} />
                      </td>
                      <td>
                        {b.admin_note || (
                          <span className="empty-msg">—</span>
                        )}
                      </td>
                      <td className="muted-text">
                        {b.user_email}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBookings;