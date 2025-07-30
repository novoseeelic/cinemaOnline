import { observer } from "mobx-react-lite";
import { lazy, Suspense } from "react";
import RootStore from "../../store/RootStore";
import Loader from "../ui/Loader/Loader";

const LazyAuthModal = lazy(() => import('./AuthModal/AuthModal'));

const Modals = observer(() => {
  return (
    <div id='modals' >
      <Suspense fallback={<Loader />}>
        {RootStore.auth.isModalActive && <LazyAuthModal />}
      </Suspense>
    </div>
  )
})

export default Modals;