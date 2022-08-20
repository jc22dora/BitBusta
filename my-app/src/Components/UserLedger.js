import React from "react";
const UserLedger = () => {
    return <div className="UserLedger">  
      <div class="user-ledger-table-container">
        <table class="user-ledger-table">
            <thead>
                <tr>
                    <th id="even-col" class="user-col">User</th>
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