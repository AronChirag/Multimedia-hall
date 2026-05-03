import React, { useCallback, useEffect, useState } from 'react';
import {
  cancelBookingRequest,
  getMyBookings,
  toApiFileUrl,
  uploadEventReport
} from '../../utils/api';
import { openReport, downloadReport } from '../../utils/fileHelpers';
import Navbar from '../../components/common/Navbar';
import PageBackButton from '../../components/common/PageBackButton';
import StatusBadge from '../../components/common/StatusBadge';
import useAutoRefresh from '../../hooks/useAutoRefresh';
import { toast } from 'react-toastify';
import { FileText, Download, Upload, XCircle, Eye, Inbox, Loader2 } from 'lucide-react';
import '../Dashboard.css';

const toDateKey = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReportFiles, setSelectedReportFiles] = useState({});
  const [uploadingBookingId, setUploadingBookingId] = useState(null);
  const [cancellingBookingId, setCancellingBookingId] = useState(null);

  const fetchBookings = useCallback(async (showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const res = await getMyBookings();
      setBookings(res.data);
    } finally {
      if (showLoader) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  useAutoRefresh(() => fetchBookings(false), 10000);

  const canUploadReport = (booking) => {
    if (booking.status !== 'approved') return false;

    const datePart = toDateKey(booking.event_date);
    const endPart = String(booking.end_time || '').slice(0, 8);
    const eventEnd = new Date(`${datePart}T${endPart}`);

    if (Number.isNaN(eventEnd.getTime())) return false;
    return new Date() >= eventEnd;
  };

  const handleReportFileChange = (bookingId, file) => {
    setSelectedReportFiles((prev) => ({ ...prev, [bookingId]: file || null }));
  };



  const submitEventReport = async (booking) => {
    const selectedFile = selectedReportFiles[booking.id];
    if (!selectedFile) {
      toast.error('Please choose a PDF file first.');
      return;
    }

    setUploadingBookingId(booking.id);
    try {
      await uploadEventReport(booking.id, selectedFile);
      toast.success('Event report uploaded successfully.');
      setSelectedReportFiles((prev) => ({ ...prev, [booking.id]: null }));
      await fetchBookings(false);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to upload event report.');
    } finally {
      setUploadingBookingId(null);
    }
  };

  const cancelRequest = async (booking) => {
    const confirmed = window.confirm(`Cancel "${booking.title}"? This cannot be undone.`);
    if (!confirmed) return;

    setCancellingBookingId(booking.id);
    try {
      await cancelBookingRequest(booking.id);
      toast.success('Booking request cancelled.');
      await fetchBookings(false);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to cancel booking request.');
    } finally {
      setCancellingBookingId(null);
    }
  };

 
/* ... imports remain same ... */


  return (
    <div className="bookings-page-root"> {/* Unique wrapper for scoping */}
      <Navbar />
      <div className="dashboard-container">
        <PageBackButton fallback="/user/dashboard" />

<<<<<<< HEAD
        <header className="welcome-header">
          <h2 className="font-heading">My <span className="highlight-text">Bookings</span></h2>
          <p className="text-muted">Track the status of your venue requests and manage post-event reports.</p>
        </header>
=======
        <div className="page-header">
          <h2>My Booking Requests</h2>
          <p>Track the status of all your submitted requests.</p>
          <p style={{ marginTop: 6, color: '#6b7280', fontSize: 14 }}>
            For approved events, upload the post-event report here after the event ends.
          </p>
        </div>
>>>>>>> c54387ea3838b024879634f9fdde57dc60d66c11

        {loading ? (
          <div className="loading-state">
            <Loader2 className="spinner" />
            <p>Syncing your workspace...</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="empty-state-modern">
            <Inbox size={64} className="text-muted" />
            <h3>No active bookings</h3>
            <p>Your submitted requests will appear here once you start a new booking.</p>
          </div>
        ) : (
          <div className="history-table-section">
            <div className="table-header">
              <h3> {bookings.length} Records Found</h3>
              <span className="location-tag">All Sessions</span>
            </div>

            <div className="table-responsive">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Event Details</th>
                    <th>Status</th>
                    <th>Media Assets</th>
                    <th>Reports & Actions</th>
                    <th>Admin Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>
                        <div className="event-info">
                          <span className="event-title">{b.title}</span>
                          <span className="event-meta">
                            {new Date(b.event_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="event-meta">{b.start_time} - {b.end_time}</span>
                        </div>
                      </td>
                      <td>
                        <StatusBadge status={b.status} />
                      </td>
                      <td>
                        {b.poster_url ? (
                          <div className="poster-preview-container">
                            <img src={toApiFileUrl(b.poster_url)} alt="Poster" className="table-poster-thumb" />
                            <a href={toApiFileUrl(b.poster_url)} target="_blank" rel="noopener noreferrer" className="eye-overlay">
                              <Eye size={16} />
                            </a>
                          </div>
                        ) : (
                          <span className="void-text">NO ASSETS</span>
                        )}
                      </td>
                      <td>
                        <div className="action-stack">
                          {b.event_report_url && (
                            <div className="report-links">
                              <button onClick={() => openReport(b)} className="link-btn">
                                <FileText size={12} /> View
                              </button>
                              <button onClick={() => downloadReport(b)} className="link-btn">
                                <Download size={12} /> Download
                              </button>
                            </div>
                          )}

                          {canUploadReport(b) ? (
                            <div className="upload-zone">
                              <label className="file-input-wrapper">
                                <input 
                                  type="file" 
                                  accept="application/pdf" 
                                  onChange={(e) => handleReportFileChange(b.id, e.target.files?.[0])} 
                                />
                                <span>{selectedReportFiles[b.id]?.name || 'Select PDF'}</span>
                              </label>
                              <button 
                                className="btn-upload"
                                onClick={() => submitEventReport(b)}
                                disabled={!selectedReportFiles[b.id] || uploadingBookingId === b.id}
                              >
                                {uploadingBookingId === b.id ? <Loader2 className="spinner-small" /> : <Upload size={14} />}
                                {uploadingBookingId === b.id ? 'Uploading...' : 'Submit'}
                              </button>
                            </div>
                          ) : b.status === 'pending' ? (
                            <button 
                              className="btn-cancel" 
                              onClick={() => cancelRequest(b)}
                              disabled={cancellingBookingId === b.id}
                            >
                              <XCircle size={14} /> Cancel Request
                            </button>
                          ) : (
                            <span className="status-note">
                              {b.status === 'approved' ? 'Upload available after event' : 'Locked'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="admin-cell">
                        {b.admin_note ? (
                          <div className="admin-note-bubble">{b.admin_note}</div>
                        ) : (
                          <span className="void-text">VOID</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> c54387ea3838b024879634f9fdde57dc60d66c11
export default MyBookings;
