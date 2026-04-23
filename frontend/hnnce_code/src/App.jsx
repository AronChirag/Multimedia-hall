import React, { useState, useEffect, useRef } from 'react';
import { 
  getFirestore, collection, doc, addDoc, updateDoc,
  onSnapshot, query, deleteDoc, Timestamp 
} from 'firebase/firestore';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { 
  Calendar, Clock, Trash2, AlertCircle, CheckCircle2, 
  FileText, UploadCloud, FileImage, History, PlusCircle, 
  Printer, AlertTriangle, X, Moon, Sun, Eye
} from 'lucide-react';
import logoImg from './assets/logo.png';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHvgwA8m2ZILovKU1_K6dL-L9HJsrVb8",
  authDomain: "hall-booking-f3257.firebaseapp.com",
  projectId: "hall-booking-f3257",
  storageBucket: "hall-booking-f3257.firebasestorage.app",
  messagingSenderId: "800349024998",
  appId: "1:800349024998:web:e77797d8841c9bc2450127",
  measurementId: "G-D6KGJPWD3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

let appId = typeof __app_id !== 'undefined' ? __app_id : 'local-development';
if (appId.includes('/') || appId.includes('_src')) {
  appId = appId.split('_src')[0].split('/')[0];
}

export default function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("16:00");
  const [posterFile, setPosterFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const posterInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  // Interaction States
  const [reportingEventId, setReportingEventId] = useState(null);
  const [reportText, setReportText] = useState("");
  const [printingEvent, setPrintingEvent] = useState(null);
  const [eventToDelete, setEventToDelete] = useState(null);
  
  // Secure in-app media preview state (Handles both Images and PDFs)
  const [previewMedia, setPreviewMedia] = useState(null); // { type: 'image' | 'pdf', url: string, name: string }

  // 1. Auth & Theme Initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);

    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        await signInAnonymously(auth).catch(console.error);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // 2. Data Subscription
  useEffect(() => {
    if (!user) return;
    const publicDataRef = collection(db, 'artifacts', appId, 'public', 'data', 'hnce_events');
    const q = query(publicDataRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(data);
    }, (err) => console.error("Firestore error:", err));

    return () => unsubscribe();
  }, [user]);

  const showToast = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleBooking = async () => {
    if (!title.trim() || !description.trim()) {
      showToast("Please provide an event title and description.", "error");
      return;
    }
    if (startTime >= endTime) {
      showToast("Start time must be before end time.", "error");
      return;
    }

    setIsUploading(true);

    try {
      // Using Local Blob URLs for instant sandbox-friendly preview without Storage setup
      const posterLocalUrl = posterFile ? URL.createObjectURL(posterFile) : null;
      const pdfLocalUrl = pdfFile ? URL.createObjectURL(pdfFile) : null;

      const publicDataRef = collection(db, 'artifacts', appId, 'public', 'data', 'hnce_events');
      await addDoc(publicDataRef, {
        title: title.trim(),
        description: description.trim(),
        date,
        startTime,
        endTime,
        posterName: posterFile ? posterFile.name : null,
        posterUrl: posterLocalUrl,
        pdfName: pdfFile ? pdfFile.name : null,
        pdfUrl: pdfLocalUrl,
        reportText: null,
        bookedBy: user.uid,
        bookedAt: Timestamp.now(),
      });

      // Reset Form securely
      setTitle(""); setDescription("");
      setPosterFile(null); setPdfFile(null);
      if (posterInputRef.current) posterInputRef.current.value = "";
      if (pdfInputRef.current) pdfInputRef.current.value = "";

      showToast(`Successfully booked: ${title}`);
    } catch (err) {
      showToast("Error processing booking.", "error");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteClick = (id, ownerId) => {
    if (ownerId !== user.uid) {
      showToast("You can only delete your own bookings.", "error");
      return;
    }
    setEventToDelete(id);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;
    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'hnce_events', eventToDelete));
      showToast("Event deleted successfully.");
    } catch (err) {
      showToast("Error deleting event.", "error");
    }
    setEventToDelete(null);
  };

  const submitReport = async () => {
    if (!reportText.trim()) return showToast("Report cannot be empty.", "error");
    try {
      const eventRef = doc(db, 'artifacts', appId, 'public', 'data', 'hnce_events', reportingEventId);
      await updateDoc(eventRef, { reportText: reportText.trim(), reportSubmittedAt: Timestamp.now() });
      setReportingEventId(null); setReportText("");
      showToast("Report submitted successfully!");
    } catch (err) {
      showToast("Error submitting report.", "error");
    }
  };

  const generatePDF = (event) => {
    setPrintingEvent(event);
    setTimeout(() => { window.print(); setPrintingEvent(null); }, 500);
  };

  const isEventCompleted = (eventDate, eventEndTime) => {
    return new Date() > new Date(`${eventDate}T${eventEndTime}:00`);
  };

  const getDaysSinceEvent = (eventDate, eventEndTime) => {
    const diffTime = new Date() - new Date(`${eventDate}T${eventEndTime}:00`);
    return diffTime < 0 ? 0 : Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
  };

  const upcomingEvents = events.filter(e => !isEventCompleted(e.date, e.endTime)).sort((a, b) => new Date(`${a.date}T${a.startTime}:00`) - new Date(`${b.date}T${b.startTime}:00`));
  const completedEvents = events.filter(e => isEventCompleted(e.date, e.endTime)).sort((a, b) => new Date(`${b.date}T${b.startTime}:00`) - new Date(`${a.date}T${a.startTime}:00`));

  if (loading) {
    return <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div className={`min-h-screen font-sans pb-12 relative transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      
      {/* --- In-App Media Viewer Modal (Bypasses Sandbox Restrictions) --- */}
      {previewMedia && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2 text-white">
                {previewMedia.type === 'pdf' ? <FileText className="w-5 h-5 text-rose-400" /> : <FileImage className="w-5 h-5 text-blue-400" />}
                <h3 className="font-bold">{previewMedia.name}</h3>
              </div>
              <button onClick={() => setPreviewMedia(null)} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-hidden bg-slate-800/50 flex items-center justify-center p-4">
              {previewMedia.type === 'image' ? (
                <img src={previewMedia.url} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
              ) : (
                <iframe src={previewMedia.url} className="w-full h-full bg-white rounded-lg shadow-lg" title="PDF Preview" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {eventToDelete && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl shadow-2xl max-w-sm w-full p-6 border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className={`flex items-center gap-3 mb-3 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              <div className={`p-2 rounded-full ${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'}`}><AlertTriangle className="w-6 h-6" /></div>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Delete Event?</h3>
            </div>
            <p className={`mb-6 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Are you sure you want to cancel and delete this event? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setEventToDelete(null)} className={`px-4 py-2 font-bold rounded-xl transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-100'}`}>Cancel</button>
              <button onClick={confirmDelete} className="px-4 py-2 font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors shadow-lg shadow-red-200">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Print View (Forced Light Mode for Printers) */}
      {printingEvent && (
        <div className="fixed inset-0 z-[9999] p-12 print-container bg-white text-black overflow-auto">
          <div className="max-w-3xl mx-auto border-2 border-slate-800 p-10 outline-double outline-4 outline-offset-4">
            <div className="text-center border-b-2 border-slate-800 pb-6 mb-6">
              <h1 className="text-3xl font-extrabold uppercase tracking-wider mb-2">Dr. H N National College of Engineering</h1>
              <p className="text-lg font-bold text-slate-600">Official Event Report</p>
            </div>
            <h2 className="text-2xl font-bold mb-4">{printingEvent.title}</h2>
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm border border-slate-300 p-4 bg-slate-50">
              <div><span className="font-bold">Date:</span> {new Date(printingEvent.date).toLocaleDateString()}</div>
              <div><span className="font-bold">Timings:</span> {printingEvent.startTime} - {printingEvent.endTime}</div>
            </div>
            <div className="mb-6"><h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-3">Description</h3><p className="whitespace-pre-wrap">{printingEvent.description}</p></div>
            <div className="mb-8"><h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-3">Report</h3><p className="whitespace-pre-wrap">{printingEvent.reportText || 'No report submitted.'}</p></div>
          </div>
        </div>
      )}

      {/* Main UI */}
      <div className={printingEvent ? 'hidden' : 'block'}>
        <header className={`shadow-md sticky top-0 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-b border-slate-800 text-white' : 'bg-blue-900 text-white'}`}>
  <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
    <div className="flex items-center gap-3">
      
      {/* 1. Put the image right here! */}
      <div className={`rounded-full p-1 shadow-sm flex-shrink-0 flex items-center justify-center ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <img 
          src={logoImg} 
          alt="Dr H N National College of Engineering" 
          className="w-12 h-12 object-contain rounded-full"
        />
      </div>

      {/* 2. The Text next to the logo */}
      <div>
        <h1 className="font-bold text-xl tracking-tight leading-tight">Dr H N National College of Engineering</h1>
      </div>
      
    </div>
    
    <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-amber-300' : 'bg-blue-800 hover:bg-blue-700 text-blue-100'}`} title="Toggle Theme">
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  </div>
</header>
        <main className="max-w-6xl mx-auto px-4 mt-8">
          {message && (
            <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50 ${message.type === 'error' ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'}`}>
              {message.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              <span className="font-medium">{message.text}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-4 space-y-6">
              <section className={`p-6 rounded-2xl shadow-sm border transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className={`flex items-center gap-2 mb-6 border-b pb-4 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                  <Calendar className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h2 className="font-bold text-lg">Schedule New Event</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className={`text-xs font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Event Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Tech Symposium" 
                           className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`} />
                  </div>

                  <div>
                    <label className={`text-xs font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Details..." 
                              className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-none h-24 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`} />
                  </div>

                  <div>
                    <label className={`text-xs font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} 
                           className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white [color-scheme:dark]' : 'bg-white border-slate-300 text-slate-900'}`} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className={`text-xs font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Start</label><input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className={`w-full p-2.5 rounded-xl border text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white [color-scheme:dark]' : 'bg-white border-slate-300 text-slate-900'}`} /></div>
                    <div><label className={`text-xs font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>End</label><input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className={`w-full p-2.5 rounded-xl border text-sm ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white [color-scheme:dark]' : 'bg-white border-slate-300 text-slate-900'}`} /></div>
                  </div>

                  <div className={`p-4 rounded-xl border space-y-3 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/50 border-blue-100'}`}>
                    <h3 className={`text-xs font-bold uppercase flex items-center gap-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}><UploadCloud className="w-4 h-4" /> Uploads</h3>
                    
                    <div>
                      <label className={`text-[10px] font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Poster (Image)</label>
                      <input ref={posterInputRef} type="file" accept="image/*" onChange={(e) => setPosterFile(e.target.files[0])} className={`text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold hover:file:bg-blue-200 transition-colors ${isDarkMode ? 'text-slate-400 file:bg-blue-900/50 file:text-blue-300' : 'text-slate-500 file:bg-blue-100 file:text-blue-700'}`} />
                      {posterFile && <div className={`mt-2 text-xs flex items-center gap-2 font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}><CheckCircle2 className="w-4 h-4" /> Ready to upload</div>}
                    </div>

                    <div>
                      <label className={`text-[10px] font-bold uppercase mb-1 block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Details (PDF)</label>
                      <input ref={pdfInputRef} type="file" accept=".pdf" onChange={(e) => setPdfFile(e.target.files[0])} className={`text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold hover:file:bg-rose-200 transition-colors ${isDarkMode ? 'text-slate-400 file:bg-rose-900/50 file:text-rose-300' : 'text-slate-500 file:bg-rose-100 file:text-rose-700'}`} />
                      {pdfFile && <div className={`mt-2 text-xs flex items-center gap-2 font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}><CheckCircle2 className="w-4 h-4" /> Ready to upload</div>}
                    </div>
                  </div>

                  <button onClick={handleBooking} disabled={isUploading} className={`w-full text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg active:scale-95 transform flex justify-center items-center gap-2 ${isUploading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    {isUploading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div> : <><PlusCircle className="w-5 h-5" /> Book Hall</>}
                  </button>
                </div>
              </section>
            </div>

            {/* Lists Column */}
            <div className="lg:col-span-8 space-y-8">
              <section className={`rounded-2xl shadow-sm border overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className={`p-5 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="flex items-center gap-2"><Clock className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} /><h2 className="font-bold text-lg">Upcoming Bookings</h2></div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>{upcomingEvents.length}</span>
                </div>
                
                <div className={`divide-y ${isDarkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                  {upcomingEvents.length === 0 ? <div className={`p-8 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>No upcoming events.</div> : 
                    upcomingEvents.map(event => (
                      <div key={event.id} className={`p-5 transition-colors group flex justify-between items-start ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}`}>
                        <div>
                          <h3 className="font-bold text-lg">{event.title}</h3>
                          <div className={`flex items-center gap-3 mt-2 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            <span className={`flex items-center gap-1 px-2 py-1 rounded-md ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200/50'}`}><Calendar className="w-4 h-4" /> {new Date(event.date).toLocaleDateString()}</span>
                            <span className={`flex items-center gap-1 px-2 py-1 rounded-md ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200/50'}`}><Clock className="w-4 h-4" /> {event.startTime} - {event.endTime}</span>
                          </div>
                          <p className={`mt-3 text-sm line-clamp-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{event.description}</p>
                          
                          {/* File Viewers - Using the new Modal System */}
                          <div className={`flex gap-4 mt-3 text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {event.posterUrl && (
                              <button onClick={() => setPreviewMedia({ type: 'image', url: event.posterUrl, name: `${event.title} Poster` })} className={`flex items-center gap-1 transition-colors px-2 py-1 rounded ${isDarkMode ? 'bg-slate-800 hover:text-blue-400' : 'bg-slate-100 hover:text-blue-600'}`}>
                                <Eye className="w-3.5 h-3.5" /> View Poster
                              </button>
                            )}
                            {event.pdfUrl && (
                              <button onClick={() => setPreviewMedia({ type: 'pdf', url: event.pdfUrl, name: `${event.title} Details` })} className={`flex items-center gap-1 transition-colors px-2 py-1 rounded ${isDarkMode ? 'bg-slate-800 text-rose-400 hover:bg-slate-700' : 'bg-slate-100 text-rose-600 hover:bg-slate-200'}`}>
                                <FileText className="w-3.5 h-3.5" /> Open PDF
                              </button>
                            )}
                          </div>
                        </div>
                        {event.bookedBy === user?.uid && <button onClick={() => handleDeleteClick(event.id, event.bookedBy)} className={`p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100 ${isDarkMode ? 'text-slate-500 hover:text-red-400 hover:bg-red-900/30' : 'text-slate-300 hover:text-red-600 hover:bg-red-50'}`}><Trash2 className="w-5 h-5" /></button>}
                      </div>
                    ))
                  }
                </div>
              </section>

              <section className={`rounded-2xl shadow-sm border overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className={`p-5 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="flex items-center gap-2"><History className={`w-5 h-5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} /><h2 className="font-bold text-lg">Completed Events</h2></div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isDarkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>{completedEvents.length}</span>
                </div>
                <div className={`divide-y ${isDarkMode ? 'divide-slate-800' : 'divide-slate-100'}`}>
                  {completedEvents.length === 0 ? <div className={`p-8 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>No completed events yet.</div> : 
                    completedEvents.map(event => (
                      <div key={event.id} className="p-5 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className={`font-bold text-lg line-through ${isDarkMode ? 'decoration-slate-600' : 'decoration-slate-300'}`}>{event.title}</h3>
                              {event.reportText ? <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isDarkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>Report Saved</span> : <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${isDarkMode ? 'bg-amber-900/50 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>Pending</span>}
                            </div>
                            <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Held on {new Date(event.date).toLocaleDateString()}</p>
                          </div>
                          <div className="flex gap-2">
                            {!event.reportText && event.bookedBy === user?.uid && reportingEventId !== event.id && <button onClick={() => setReportingEventId(event.id)} className={`text-sm font-bold py-1.5 px-3 rounded-lg transition-colors border ${isDarkMode ? 'bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50 border-indigo-800' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200'}`}>Write Report</button>}
                            {event.reportText && <button onClick={() => generatePDF(event)} className={`text-sm text-white font-bold py-1.5 px-3 rounded-lg transition-colors flex items-center gap-1.5 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-800 hover:bg-slate-700'}`}><Printer className="w-4 h-4" /> PDF Report</button>}
                          </div>
                        </div>
                        {!event.reportText && getDaysSinceEvent(event.date, event.endTime) > 2 && (
                          <div className={`p-2.5 rounded-lg flex gap-2 text-xs font-medium border ${isDarkMode ? 'bg-red-900/20 border-red-800/50 text-red-400' : 'bg-red-50 border-red-200 text-red-700'}`}><AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" /><p>Action Required: File an event report within 2 days.</p></div>
                        )}
                        {reportingEventId === event.id && (
                          <div className={`p-4 rounded-xl border mt-2 ${isDarkMode ? 'bg-indigo-900/20 border-indigo-800/50' : 'bg-indigo-50/50 border-indigo-100'}`}>
                            <div className="flex justify-between items-center mb-2"><label className={`text-xs font-bold uppercase block ${isDarkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>Post-Event Report</label><button onClick={() => setReportingEventId(null)} className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-400 hover:text-slate-700'}`}><X className="w-4 h-4" /></button></div>
                            <textarea value={reportText} onChange={(e) => setReportText(e.target.value)} placeholder="How did the event go?" className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm resize-y h-32 mb-3 ${isDarkMode ? 'bg-slate-800 border-indigo-800 text-white' : 'bg-white border-indigo-200 text-slate-900'}`} />
                            <div className="flex justify-end"><button onClick={submitReport} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">Save Report</button></div>
                          </div>
                        )}
                        {event.reportText && reportingEventId !== event.id && (
                          <div className={`p-3 rounded-lg border text-sm italic ${isDarkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}><FileText className={`w-4 h-4 inline-block mr-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} /> <span className="line-clamp-2 inline">{event.reportText}</span></div>
                        )}
                      </div>
                    ))
                  }
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}