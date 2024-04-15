import AssociationComponent from "./components/association";
import LIST_USERS from './mocks/list_users.json';

const ASSOCIATION_USERS = [
  {
    "id": 3,
    "name": "Taís Aranda de Beltrão"
  },
  {
    "id": 4,
    "name": "Ariel Gil"
  }
]

function App() {

  return (
    <div className="container">
      <div className="pd">
        <AssociationComponent
          associationItems={ASSOCIATION_USERS}
          nonAssociationItems={LIST_USERS}
        />
      </div>      
    </div>
  )
}

export default App
