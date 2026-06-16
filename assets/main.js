document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // ===== Active Nav Link =====
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.sub-nav-item, .category-tab').forEach(item => {
    item.addEventListener('click', function () {
      const parent = this.parentElement;
      parent.querySelectorAll('.sub-nav-item, .category-tab').forEach(sib => sib.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ===== Mobile Menu =====
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.innerHTML = `
    <button class="mobile-menu-close">&times;</button>
    ${document.querySelector('.nav-links') ? document.querySelector('.nav-links').innerHTML : ''}
  `;
  document.body.appendChild(menu);

  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', () => menu.classList.add('open'));
  }

  menu.querySelector('.mobile-menu-close').addEventListener('click', () => menu.classList.remove('open'));

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== Chat Send (chat page) =====
  const chatInput = document.querySelector('.chat-input');
  const chatSend = document.querySelector('.chat-send');
  const chatMessages = document.querySelector('.chat-messages');

  if (chatSend && chatInput && chatMessages) {
    function sendChatMessage() {
      const text = chatInput.value.trim();
      if (!text) return;

      const msg = document.createElement('div');
      msg.className = 'chat-msg';
      msg.innerHTML = `
        <div class="chat-msg-avatar">
          <img src="https://static.codia.ai/image/placeholder.svg" alt="You">
        </div>
        <div class="chat-msg-body">
          <div class="chat-msg-name">You</div>
          <div class="chat-msg-text">${escapeHtml(text)}</div>
        </div>
        <div class="chat-msg-heart">
          <span class="heart-icon">&hearts;</span>
          <span>0</span>
        </div>
      `;
      chatMessages.appendChild(msg);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }

  // ===== Heart Click =====
  document.querySelectorAll('.chat-msg-heart').forEach(heart => {
    heart.addEventListener('click', function () {
      const countSpan = this.querySelector('span:last-child');
      let count = parseInt(countSpan.textContent, 10);
      countSpan.textContent = count + 1;
    });
  });

  // ===== Vote Buttons (streameur page) =====
  document.querySelectorAll('.streamer-vote-opt').forEach(btn => {
    btn.addEventListener('click', function () {
      this.parentElement.querySelectorAll('.streamer-vote-opt').forEach(b => b.style.background = 'rgba(217, 217, 217, 0.01)');
      this.style.background = 'rgba(239, 25, 181, 0.3)';
    });
  });

  // ===== Search submit (placeholder) =====
  document.querySelectorAll('.nav-search input, .filter-search input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        const query = input.value.trim();
        const base = currentPage === 'parcourir.html' ? '' : 'parcourir.html';
        window.location.href = (base ? base + '?search=' : '?search=') + encodeURIComponent(query);
      }
    });
  });
});

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
