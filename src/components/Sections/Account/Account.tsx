import { useState } from "react";
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import { MyAccountTab, MyAccountTabs } from "./AccountTabs";
import './Account.scss';

const MyAccount = () => {
  const [currentTab, setCurrentTab] = useState<MyAccountTab>(MyAccountTabs[0]);

  return (
    <section className="my-account">
      <Container>
        <div className="my-account__wrapper">
          <Heading level={1}>Мой аккаунт</Heading>
          <nav aria-label='Навигация по странице аккаунта'>
            <ul className="my-account__nav-list">
              {MyAccountTabs.map(tab => (
                <li key={tab.title}>
                  <button
                    className={`my-account__nav-btn ${tab === currentTab ? 'my-account__nav-btn--active' : ''}`}
                    type='button'
                    onClick={() => setCurrentTab(tab)}
                  >
                    {tab.icon}{tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {currentTab.content}
        </div>
      </Container>
    </section>
  )
}

export default MyAccount;