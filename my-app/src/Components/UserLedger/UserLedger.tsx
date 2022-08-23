import React from "react";
import './UserLedger.css'

const UserLedger = () => {
    return <div className="UserLedger">  
      <div className="user-ledger-table-container">
        <table className="user-ledger-table">
            <thead>
                <tr>
                    <th id="even-col" className="user-col">User</th>
                    <th id="odd-col">@</th>
                    <th id="even-col">Bet</th>
                    <th id="odd-col">Profit</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>User</td>
                <td>@</td>
                <td>Bet</td>
                <td>Profit</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  }
  
export default UserLedger;