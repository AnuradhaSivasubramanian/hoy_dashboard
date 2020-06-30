import React from "react";
import Logins from "./Logins";
import Notifications from "./Notifications";
import "../stylesheets/Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard--wrapper">
      <div className="dashboard--heading">
        <h1>Hoy - Dashboard</h1>
      </div>
      <div className="dashboard--content">
        <div className="dashboard--logins">
          <Logins />
        </div>
        <div className="dashboard--notifications">
          <Notifications />
        </div>
      </div>
      <div className="dashboard--footer"></div>
    </div>
  );
}
