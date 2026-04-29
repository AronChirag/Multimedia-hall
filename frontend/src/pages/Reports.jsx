import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { downloadPDF, downloadExcel, downloadActionLogs } from "../utils/api";
import { toast } from "react-toastify";
import Navbar from "../components/common/Navbar";
import PageBackButton from "../components/common/PageBackButton";
import { COLLEGE_NAMES } from "../constants/colleges";
import "./Reports.css";

const Reports = () => {
  const { user } = useAuth();
  const isAdmin = ["admin", "supervisor"].includes(user?.role);
  const isSupervisor = user?.role === "supervisor";

  const [filters, setFilters] = useState({
    college: "",
    status: "",
    from: "",
    to: "",
  });

  const [loading, setLoading] = useState({ pdf: false, excel: false, logs: false });

  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownload = async (type) => {
    setLoading((prev) => ({ ...prev, [type]: true }));

    try {
      const params = Object.fromEntries(
        Object.entries(filters).filter(
          ([, v]) => String(v || "").trim() !== "",
        ),
      );

      let res;
      let filename;

      if (type === "pdf") {
        res = await downloadPDF(params);
        filename = "bookings_report.pdf";
      } else if (type === "excel") {
        res = await downloadExcel(params);
        filename = "bookings_report.xlsx";
      } else if (type === "logs") {
        res = await downloadActionLogs();
        filename = `actions-${new Date().toISOString().slice(0, 10)}.log`;
      }

      triggerDownload(res.data, filename);

      toast.success(`${type.toUpperCase()} report downloaded successfully!`);
    } catch (err) {
      console.error(err);
      toast.error(`Failed to download ${type.toUpperCase()} report`);
    } finally {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reports-page">
        <PageBackButton
          fallback={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
        />

        <div className="page-header">
          <h2>📊 Reports</h2>
          <p>
            Export booking data as <strong>PDF or Excel</strong> using the{" "}
            <strong>same tabular format</strong> (including event description,
            poster/report links, etc.).
          </p>
        </div>

        <div className="reports-card">
          <div className="filters-section">
            <h3>Filters</h3>

            <div className="filters-grid">
              {isAdmin && (
                <div className="form-group">
                  <label>College</label>
                  <select
                    name="college"
                    value={filters.college}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">All Colleges</option>
                    {COLLEGE_NAMES.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="form-group">
                <label>From Date</label>
                <input
                  type="date"
                  name="from"
                  value={filters.from}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="form-group">
                <label>To Date</label>
                <input
                  type="date"
                  name="to"
                  value={filters.to}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="export-buttons">
            <button
              className="btn btn-accent"
              onClick={() => handleDownload("pdf")}
              disabled={loading.pdf}
            >
              {loading.pdf ? "Generating PDF..." : "📄 Download PDF"}
            </button>

            <button
              className="btn btn-accent"
              onClick={() => handleDownload("excel")}
              disabled={loading.excel}
            >
              {loading.excel ? "Generating Excel..." : "📊 Download Excel"}
            </button>

            {isSupervisor && (
              <button
                className="btn btn-secondary"
                onClick={() => handleDownload("logs")}
                disabled={loading.logs}
                style={{ marginLeft: '10px' }}
              >
                {loading.logs ? "Downloading Logs..." : "📝 Download Action Logs"}
              </button>
            )}
          </div>

          <small style={{ marginTop: "1rem", display: "block", color: "#666" }}>
            Both formats now use the same data structure (Excel layout mirrored
            in PDF)
          </small>
        </div>
      </div>
    </div>
  );
};

export default Reports;
