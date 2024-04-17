import { useState } from "react";
import AssociationComponent from "./components/association";

import type { IdNumber } from "./types/basic.d";

import LIST_USERS from './mocks/list_users.json';
import LIST_SELECTED_USERS from './mocks/list_selected_users.json';

function App() {
  const [selectedUsers, setSelectedUsers] = useState<Array<IdNumber>>(LIST_SELECTED_USERS);
  const [allUsers, setallUsers] = useState<Array<IdNumber>>(LIST_USERS);

  return (
    <div className="container">
      <div className="pd">
        <AssociationComponent
          associationItems={selectedUsers}
          setAssociationItems={setSelectedUsers}
          nonAssociationItems={allUsers}
          setNonAssociationItems={setallUsers}
        />
      </div>      
    </div>
  )
}

export default App
