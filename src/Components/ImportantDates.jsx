import React from 'react';
import './ImportantDates.css';

const ImportantDates = () => {
  return (
    <section id="dates" className="section">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        
        <div className="dates-table-container">
          <table className="dates-table">
            <thead className="table-header">
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>Submission of Abstracts</td>
                <td>July 04, 2025</td>
              </tr>
              <tr className="table-row alt-row">
                <td>Acceptance of Abstracts</td>
                <td>July 15, 2025</td>
              </tr>
              <tr className="table-row">
                <td>Full Paper Submission</td>
                <td>Aug 01, 2025</td>
              </tr>
              <tr className="table-row alt-row">
                <td>Registration</td>
                <td>Aug 08, 2025</td>
              </tr>
              <tr className="table-row">
                <td>Last date for Registration</td>
                <td>Aug 22, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;