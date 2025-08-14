import React from "react";
import UserStatus from "./components/UserStatus";
import withLogger from "./components/WithLogger";
import HookDemo from "./components/HookDemo";


const UserStatusWithLogger = withLogger(UserStatus);

export default function App() {
  return (
    <div className="app">
      <h1>User Status Tracker</h1>
      <UserStatusWithLogger username="Santhosh" />
      <hr />
      <HookDemo />
    </div>
  );
}
