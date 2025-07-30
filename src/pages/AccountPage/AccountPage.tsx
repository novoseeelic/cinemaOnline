import { observer } from "mobx-react-lite";
import MyAccount from "../../components/Sections/Account/Account";
import NotFound from "../../components/Sections/NotFound/NotFound";
import RootStore from "../../store/RootStore";

const AccountPage = observer(() => {
  return (
    <main>
      {RootStore.auth.isAuthorized
        ? <MyAccount />
        : <NotFound />
      }
    </main>
  )
})

export default AccountPage;