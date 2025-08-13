import './AccountSeries.css';

const AccountSeries = () => {
    return (
      <div className="account-container">
        {/* Cabeçalho */}
        <header className="account-header">
          <h1 className="netflix-logo">NETFLIX</h1>
          <div className="user-icon">😊</div>
        </header>
  
        {/* Corpo da página de conta */}
        <main className="account-content">
          {/* Informações da conta */}
          <section className="account-info">
            <h2>Conta</h2>
            <div className="subscription-details">
              <span className="subscriber-tag">Assinante desde julho de 2015</span>
              <p><strong>Plano Padrão</strong></p>
              <p>Próximo pagamento: 31 de janeiro de 2025</p>
              <p>💳 **** **** **** 2777</p>
              <button className="manage-btn">Gerenciar assinatura</button>
            </div>
          </section>
  
          {/* Opções da conta */}
          <section className="account-options">
            <div className="option">🔄 Alterar plano</div>
            <div className="option">💳 Gerenciar forma de pagamento</div>
            <div className="option new-feature">📩 Comprar um acesso de assinante extra <span>Novo</span></div>
            <div className="option">📱 Gerenciar acesso e aparelhos</div>
            <div className="option">🔑 Atualizar senha</div>
            <div className="option">🔄 Transferir um perfil</div>
            <div className="option">🛑 Ajustar controle parental</div>
            <div className="option">⚙️ Editar configurações</div>
          </section>
  
          {/* Gerenciar Perfis */}
          <section className="profiles">
            <h3>Gerenciar perfis</h3>
            <div className="profile-icons">
              <span>😊</span> <span>🎭</span> <span>🕵️</span> <span>👨‍💻</span> <span>🎮</span>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default AccountSeries;