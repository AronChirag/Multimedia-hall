import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { getCalendarBookings } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import PageBackButton from '../components/common/PageBackButton';
import './Calendar.css';

/* ===============================
   COLLEGE COLORS ONLY (UPDATED)
================================ */
const COLLEGE_COLORS = {
  'College A': '#2563eb', // Blue
  'College B': '#f97316', // Orange
  'College C': '#22c55e', // Green
};

const DEFAULT_COLOR = '#6366f1';

const toLocalDateTime = (dateStr, timeStr) => {
  return `${dateStr}T${timeStr}`;
};

const CalendarView = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    fetchBookings(start.toISOString(), end.toISOString());
  }, []);

  const fetchBookings = async (startDate, endDate) => {
    try {
      const res = await getCalendarBookings(startDate, endDate);

      const mapped = res.data.map((booking) => {
        const collegeColor =
          COLLEGE_COLORS[booking.college_name] || DEFAULT_COLOR;

        return {
          id: booking.id,
          title: booking.title,
          start: toLocalDateTime(
            booking.event_date.split('T')[0],
            booking.start_time
          ),
          end: toLocalDateTime(
            booking.event_date.split('T')[0],
            booking.end_time
          ),

          /* ONLY COLLEGE COLOR USED */
          backgroundColor: collegeColor,
          borderColor: collegeColor,

          extendedProps: {
            ...booking,
            collegeColor,
          },
        };
      });

      setEvents(mapped);
    } catch (err) {
      console.error('Failed to load calendar events');
    }
  };

  const handleEventClick = ({ event }) => {
    setSelectedEvent(event.extendedProps);
  };

  const handleDateClick = (info) => {
    if (user?.role !== 'college') return;

    const selectedDate = info.dateStr.split('T')[0];

    navigate(`/user/new-booking?date=${selectedDate}`, {
      state: { selectedDate },
    });
  };

  return (
    <div>
      <Navbar />

      <div className="calendar-page">
        <PageBackButton
          fallback={
            user?.role === 'admin'
              ? '/admin/dashboard'
              : '/user/dashboard'
          }
        />

        <div className="page-header">
          <h2>Auditorium Calendar</h2>
          <p>Events are color-coded by College</p>
        </div>

        <div className="calendar-wrap">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            datesSet={(arg) => {
              fetchBookings(arg.startStr, arg.endStr);
            }}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            events={events}
            eventClick={handleEventClick}
            dateClick={handleDateClick}

            /* ===============================
               CLEAN EVENT RENDERING
            ================================= */
            eventContent={(eventInfo) => {
              const { title, start, end } = eventInfo.event;

              const startTime = start?.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });

              const endTime = end?.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });

              const color =
                eventInfo.event.backgroundColor || DEFAULT_COLOR;

              return (
                <div
                  style={{
                    backgroundColor: color,
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '6px 8px',
                    fontSize: '11px',
                    lineHeight: '1.3',
                    fontWeight: 500,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {title}
                  </div>

                  <div style={{ opacity: 0.9, fontSize: '10px' }}>
                    {startTime} – {endTime}
                  </div>
                </div>
              );
            }}

            height="auto"
          />
        </div>

        {/* ===============================
            MODAL
        ================================= */}
        {selectedEvent && (
          <div
            className="event-modal-overlay"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              className="event-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>

              <h3>{selectedEvent.title}</h3>

              <div className="event-details">
                <p>
                  <strong>College:</strong>{' '}
                  {selectedEvent.college_name}
                </p>

                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(selectedEvent.event_date).toDateString()}
                </p>

                <p>
                  <strong>Time:</strong>{' '}
                  {selectedEvent.start_time} - {selectedEvent.end_time}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;