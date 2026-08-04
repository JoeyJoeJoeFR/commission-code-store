const tabs = [
  { id: 'store', title: 'Store', subtitle: 'Browse prebuilt scripts and integrations.' },
  { id: 'commission', title: 'Order Custom Code', subtitle: 'Submit a custom software request.' },
  { id: 'orders', title: 'My Orders', subtitle: 'Review your active commissions and purchases.' },
  { id: 'languages', title: 'Languages', subtitle: 'Explore coding language resources.' },
  { id: 'staff', title: 'Staff', subtitle: 'Handle incoming orders and hand them to IT.' },
  { id: 'it', title: 'IT Dept', subtitle: 'Build, test, and return finished code work.' },
  { id: 'account', title: 'Account', subtitle: 'Log in, register, and manage your profile.' },
  { id: 'support', title: 'Support', subtitle: 'Manage refunds, cancellations, and help requests.' }
];

const prebuiltItems = [
  {
    id: 'script-1',
    title: 'Automated Web Scraper Engine',
    category: 'Automation',
    price: 1590,
    oldPrice: 1990,
    tech: ['Python', 'Playwright', 'BeautifulSoup'],
    description: 'High-performance web scraping framework with proxy rotation and anti-bot bypass.',
    downloads: 142,
    features: ['Proxy rotation', 'CSV + JSON export', 'Starter docs']
  },
  {
    id: 'script-2',
    title: 'Auth & User Management Suite',
    category: 'Full-Stack',
    price: 2490,
    oldPrice: 2990,
    tech: ['React', 'Node.js', 'JWT', 'PostgreSQL'],
    description: 'Complete JWT authentication with OAuth 2.0, multi-factor auth, and role-based access.',
    downloads: 289,
    features: ['JWT login flow', 'Role-based access', 'Admin dashboard']
  },
  {
    id: 'script-3',
    title: 'Discord Moderation & Economy Bot',
    category: 'Bots',
    price: 1890,
    oldPrice: 2390,
    tech: ['Node.js', 'Discord.js', 'MongoDB'],
    description: 'Feature-rich Discord bot with auto-moderation, leveling, and virtual economy.',
    downloads: 98,
    features: ['Leveling system', 'Economy commands', 'Mod tools']
  },
  {
    id: 'script-4',
    title: 'E-Commerce Stripe Checkout API',
    category: 'API & Microservices',
    price: 3290,
    oldPrice: 3890,
    tech: ['TypeScript', 'Express', 'Stripe SDK'],
    description: 'Payment backend with webhooks, subscriptions, and refund handlers.',
    downloads: 310,
    features: ['Webhook support', 'Refund handling', 'Subscription billing']
  }
];

const languagePacks = [
  {
    id: 'php',
    title: 'PHP Starter Pack',
    description: 'Reusable PHP templates for forms, APIs, and admin panels.',
    filename: 'php-starter-pack.txt',
    content: 'PHP Starter Pack\n- Form handler template\n- API route starter\n- Admin panel layout sample'
  },
  {
    id: 'java',
    title: 'Java Starter Pack',
    description: 'Console and backend Java foundations for school and capstone projects.',
    filename: 'java-starter-pack.txt',
    content: 'Java Starter Pack\n- Main class template\n- CRUD service scaffold\n- File handling sample'
  },
  {
    id: 'javascript',
    title: 'JavaScript Starter Pack',
    description: 'Frontend and Node.js modules with reusable UI patterns.',
    filename: 'javascript-starter-pack.txt',
    content: 'JavaScript Starter Pack\n- DOM utility functions\n- API request helper\n- UI state sample'
  },
  {
    id: 'c',
    title: 'C Starter Pack',
    description: 'Simple C utilities for data structures and algorithm study.',
    filename: 'c-starter-pack.txt',
    content: 'C Starter Pack\n- Linked list sample\n- Stack implementation\n- File input output example'
  },
  {
    id: 'cpp',
    title: 'C++ Starter Pack',
    description: 'Performance-oriented templates for games, algorithms, and competitions.',
    filename: 'cpp-starter-pack.txt',
    content: 'C++ Starter Pack\n- Sorting template\n- Class demo\n- Graph traversal sample'
  },
  {
    id: 'csharp',
    title: 'C# Starter Pack',
    description: 'Helpful C# templates for .NET, desktop apps, and Unity-style coding.',
    filename: 'csharp-starter-pack.txt',
    content: 'C# Starter Pack\n- Console app template\n- Service class sample\n- JSON helper example'
  }
];

const commissionScope = [
  { id: 'basic', title: 'Basic Script / Bug Fix', price: 4200 },
  { id: 'medium', title: 'Full Feature Module', price: 9800 },
  { id: 'complex', title: 'Full Platform / App', price: 24800 }
];

const deliveryOptionsData = [
  { id: 'standard', title: 'Standard (7 days)', multiplier: 1.0 },
  { id: 'express', title: 'Express (3 days)', multiplier: 1.3 },
  { id: 'rush', title: 'Rush (24 hours)', multiplier: 1.8 }
];

const stackOptions = ['React', 'Node.js', 'Python', 'TypeScript', 'Go', 'PostgreSQL', 'Docker', 'TailwindCSS'];

let currentTab = 'store';

const state = {
  search: '',
  category: 'all',
  sort: 'featured',
  promo: '',
  promoApplied: false,
  selectedScope: 'medium',
  selectedDelivery: 'standard',
  selectedStack: ['React', 'Node.js'],
  description: '',
  cart: [],
  supportTickets: [],
  currentUser: null,
  authView: 'login',
  workflowOrders: []
};

const tabButtons = document.getElementById('tabButtons');
const activeTabTitle = document.getElementById('activeTabTitle');
const activeTabSubtitle = document.getElementById('activeTabSubtitle');
const orderCount = document.getElementById('orderCount');
const catalogCount = document.getElementById('catalogCount');
const storePanel = document.getElementById('storePanel');
const commissionPanel = document.getElementById('commissionPanel');
const ordersPanel = document.getElementById('ordersPanel');
const languagesPanel = document.getElementById('languagesPanel');
const staffPanel = document.getElementById('staffPanel');
const itPanel = document.getElementById('itPanel');
const accountPanel = document.getElementById('accountPanel');
const supportPanel = document.getElementById('supportPanel');
const storeGrid = document.getElementById('storeGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const scopeOptions = document.getElementById('scopeOptions');
const deliveryOptions = document.getElementById('deliveryOptions');
const stackButtons = document.getElementById('stackButtons');
const estimatedPrice = document.getElementById('estimatedPrice');
const projectDescription = document.getElementById('projectDescription');
const commissionForm = document.getElementById('commissionForm');
const ordersList = document.getElementById('ordersList');
const supportForm = document.getElementById('supportForm');
const supportType = document.getElementById('supportType');
const supportOrderSelect = document.getElementById('supportOrderSelect');
const supportMessage = document.getElementById('supportMessage');
const supportList = document.getElementById('supportList');
const promoInput = document.getElementById('promoInput');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const promoStatus = document.getElementById('promoStatus');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalValue = document.getElementById('subtotalValue');
const discountValue = document.getElementById('discountValue');
const totalValue = document.getElementById('totalValue');
const checkoutBtn = document.getElementById('checkoutBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerName = document.getElementById('registerName');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const accountStatus = document.getElementById('accountStatus');
const authGate = document.getElementById('authGate');
const pageContainer = document.querySelector('.page');
const accountInfo = document.getElementById('accountInfo');
const logoutBtn = document.getElementById('logoutBtn');
const languageGrid = document.getElementById('languageGrid');
const staffOrdersList = document.getElementById('staffOrdersList');
const itOrdersList = document.getElementById('itOrdersList');

function formatCurrency(value) {
  return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(value);
}

function generateKey(title) {
  const code = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
  return `${code}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function getEstimatedPrice() {
  const scope = commissionScope.find(item => item.id === state.selectedScope);
  const delivery = deliveryOptionsData.find(item => item.id === state.selectedDelivery);
  const stackFee = state.selectedStack.length * 650;
  return Math.round((scope.price + stackFee) * delivery.multiplier);
}

function getDiscountPercent() {
  const promo = state.promo.toUpperCase();
  if (state.promoApplied && promo === 'STU20') return 0.2;
  if (state.promoApplied && promo === 'CTRL+ALT+STU50') return 0.5;
  return 0;
}

function getUserCart() {
  return state.currentUser ? state.currentUser.cart || [] : state.cart;
}

function getCartSubtotal() {
  return getUserCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartDiscount() {
  return Math.round(getCartSubtotal() * getDiscountPercent());
}

function getCartTotal() {
  return getCartSubtotal() - getCartDiscount();
}

function getCurrentUserOrders() {
  return state.currentUser?.orders || [];
}

function getCurrentUserTickets() {
  return state.currentUser?.supportTickets || [];
}

function loadWorkflowOrders() {
  const raw = localStorage.getItem('codeStoreWorkflowOrders');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function saveWorkflowOrders() {
  localStorage.setItem('codeStoreWorkflowOrders', JSON.stringify(state.workflowOrders));
}

function buildWorkflowOrder(orderData, source) {
  const workflowOrder = {
    ...orderData,
    source,
    stage: 'staff-review',
    updateHistory: [
      {
        stage: 'staff-review',
        note: `Order received from ${source}.`,
        date: new Date().toISOString().split('T')[0]
      }
    ],
    buyerEmail: state.currentUser?.email || orderData.buyerEmail || '',
    buyerName: state.currentUser?.name || orderData.buyerName || 'Buyer'
  };
  state.workflowOrders.unshift(workflowOrder);
  saveWorkflowOrders();
  return workflowOrder;
}

function saveAccount(user) {
  localStorage.setItem('codeStoreAccount', JSON.stringify(user));
  const accounts = JSON.parse(localStorage.getItem('codeStoreAccounts') || '[]');
  const existingIndex = accounts.findIndex(account => account.email === user.email);
  if (existingIndex >= 0) {
    accounts[existingIndex] = user;
  } else {
    accounts.push(user);
  }
  localStorage.setItem('codeStoreAccounts', JSON.stringify(accounts));
}

function loadAccount() {
  const raw = localStorage.getItem('codeStoreAccount');
  if (!raw) return null;
  try {
    const user = JSON.parse(raw);
    return {
      ...user,
      orders: user.orders || [],
      supportTickets: user.supportTickets || [],
      cart: user.cart || []
    };
  } catch (error) {
    return null;
  }
}

function requireAccount(actionLabel) {
  if (!state.currentUser) {
    alert(`Please create an account or log in before you can ${actionLabel}.`);
    setTab('account');
    return false;
  }
  return true;
}

function setTab(tabId) {
  currentTab = tabId;
  const tabData = tabs.find(tab => tab.id === tabId);
  if (!tabData) return;
  activeTabTitle.textContent = tabData.title;
  activeTabSubtitle.textContent = tabData.subtitle;
  orderCount.textContent = `${getCurrentUserOrders().length} orders`;

  tabButtons.querySelectorAll('.tab').forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tabId);
  });

  storePanel.hidden = tabId !== 'store';
  commissionPanel.hidden = tabId !== 'commission';
  ordersPanel.hidden = tabId !== 'orders';
  languagesPanel.hidden = tabId !== 'languages';
  staffPanel.hidden = tabId !== 'staff';
  itPanel.hidden = tabId !== 'it';
  accountPanel.hidden = tabId !== 'account';
  supportPanel.hidden = tabId !== 'support';
}

function renderTabs() {
  tabButtons.innerHTML = tabs
    .map(tab => `<button class="tab${tab.id === currentTab ? ' active' : ''}" data-tab="${tab.id}">${tab.title}</button>`)
    .join('');

  tabButtons.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => setTab(button.dataset.tab));
  });
}

function renderCategoryFilter() {
  const categories = ['all', ...new Set(prebuiltItems.map(item => item.category))];
  categoryFilter.innerHTML = categories
    .map(category => `<option value="${category}" ${state.category === category ? 'selected' : ''}>${category === 'all' ? 'All categories' : category}</option>`)
    .join('');
}

function getFilteredItems() {
  const query = state.search.trim().toLowerCase();
  return prebuiltItems
    .filter(item => {
      const matchesCategory = state.category === 'all' || item.category === state.category;
      const matchesQuery =
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tech.some(tech => tech.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    })
    .sort((a, b) => {
      if (state.sort === 'cheap') return a.price - b.price;
      if (state.sort === 'expensive') return b.price - a.price;
      return 0;
    });
}

function renderStore() {
  const filtered = getFilteredItems();
  catalogCount.textContent = filtered.length;

  if (filtered.length === 0) {
    storeGrid.innerHTML = '<div class="orders-empty">No matching products were found.</div>';
    return;
  }

  storeGrid.innerHTML = filtered
    .map(item => `
      <div class="card">
        <div>
          <div class="meta">
            <span class="pill">${item.category}</span>
            <span class="pill success">${item.downloads} downloads</span>
          </div>
          <h3>${item.title}</h3>
          <p style="color: var(--muted); margin: 0.3rem 0 0.8rem; line-height: 1.6;">${item.description}</p>
          <div class="price-row">
            <div>
              <strong>${formatCurrency(item.price)}</strong>
              <div class="old-price">${item.oldPrice ? formatCurrency(item.oldPrice) : ''}</div>
            </div>
            <span class="pill">Student deal</span>
          </div>
          <div class="tags" style="margin-top: 0.8rem;">${item.tech.map(tech => `<span>${tech}</span>`).join('')}</div>
          <ul class="features-list">
            ${item.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="card-actions">
          <button data-action="buy" data-id="${item.id}">Add to cart</button>
          <button class="secondary-btn" data-action="preview" data-id="${item.id}">Preview</button>
        </div>
      </div>
    `)
    .join('');

  storeGrid.querySelectorAll('button[data-action="buy"]').forEach(button => {
    button.addEventListener('click', () => {
      const item = prebuiltItems.find(product => product.id === button.dataset.id);
      if (!item) return;
      const cart = getUserCart();
      const existing = cart.find(entry => entry.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      if (state.currentUser) {
        state.currentUser.cart = cart;
        saveAccount(state.currentUser);
      } else {
        state.cart = cart;
      }
      renderCart();
      setTab('store');
    });
  });

  storeGrid.querySelectorAll('button[data-action="preview"]').forEach(button => {
    button.addEventListener('click', () => {
      const item = prebuiltItems.find(product => product.id === button.dataset.id);
      if (!item) return;
      openModal(item.title, `
        <div class="notice">${item.description}</div>
        <p><strong>Category:</strong> ${item.category}</p>
        <p><strong>Tech stack:</strong> ${item.tech.join(', ')}</p>
        <ul class="features-list">
          ${item.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="card-actions" style="margin-top: 1rem;">
          <button class="primary-btn" data-add-product="${item.id}">Add to cart</button>
          <button class="secondary-btn" data-close-modal="true">Close</button>
        </div>
      `);
    });
  });
}

function renderLanguages() {
  languageGrid.innerHTML = languagePacks
    .map(pack => `
      <div class="language-card">
        <div class="tag">${pack.title.split(' ')[0]}</div>
        <h3>${pack.title}</h3>
        <p>${pack.description}</p>
        <div class="card-actions" style="margin-top: 1rem;">
          <button class="primary-btn" data-download-pack="${pack.id}">Download pack</button>
        </div>
      </div>
    `)
    .join('');

  languageGrid.querySelectorAll('[data-download-pack]').forEach(button => {
    button.addEventListener('click', () => {
      const pack = languagePacks.find(item => item.id === button.dataset.downloadPack);
      if (!pack) return;
      const blob = new Blob([pack.content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = pack.filename;
      link.click();
      URL.revokeObjectURL(url);
    });
  });
}

function renderCart() {
  const cart = getUserCart();
  cartCount.textContent = `${cart.reduce((sum, item) => sum + item.quantity, 0)} items`;
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty. Add a product to get started.</div>';
    subtotalValue.textContent = formatCurrency(0);
    discountValue.textContent = formatCurrency(0);
    totalValue.textContent = formatCurrency(0);
    return;
  }

  cartItems.innerHTML = cart
    .map(item => `
      <div class="cart-item">
        <strong>${item.title}</strong>
        <small>${item.quantity} × ${formatCurrency(item.price)}</small>
      </div>
    `)
    .join('');

  subtotalValue.textContent = formatCurrency(getCartSubtotal());
  discountValue.textContent = formatCurrency(getCartDiscount());
  totalValue.textContent = formatCurrency(getCartTotal());
}

function renderCommissionOptions() {
  scopeOptions.innerHTML = commissionScope
    .map(option => `
      <button type="button" class="option-card${state.selectedScope === option.id ? ' selected' : ''}" data-scope="${option.id}">
        <strong>${option.title}</strong>
        <small>Base ${formatCurrency(option.price)}</small>
      </button>
    `)
    .join('');

  deliveryOptions.innerHTML = deliveryOptionsData
    .map(option => `
      <button type="button" class="option-card${state.selectedDelivery === option.id ? ' selected' : ''}" data-delivery="${option.id}">
        <strong>${option.title}</strong>
        <small>${option.multiplier}x rate</small>
      </button>
    `)
    .join('');

  stackButtons.innerHTML = stackOptions
    .map(stack => `
      <button type="button" class="${state.selectedStack.includes(stack) ? 'selected' : ''}" data-stack="${stack}">${stack}</button>
    `)
    .join('');

  document.querySelectorAll('#scopeOptions button').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedScope = button.dataset.scope;
      renderCommissionOptions();
      renderEstimatedPrice();
    });
  });

  document.querySelectorAll('#deliveryOptions button').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedDelivery = button.dataset.delivery;
      renderCommissionOptions();
      renderEstimatedPrice();
    });
  });

  document.querySelectorAll('#stackButtons button').forEach(button => {
    button.addEventListener('click', () => {
      const tech = button.dataset.stack;
      const index = state.selectedStack.indexOf(tech);
      if (index >= 0) {
        state.selectedStack.splice(index, 1);
      } else {
        state.selectedStack.push(tech);
      }
      renderCommissionOptions();
      renderEstimatedPrice();
    });
  });
}

function renderEstimatedPrice() {
  estimatedPrice.textContent = formatCurrency(getEstimatedPrice());
}

function renderSupportOrderOptions() {
  const currentOrders = getCurrentUserOrders();
  supportOrderSelect.innerHTML = currentOrders.length
    ? currentOrders.map(order => `<option value="${order.id}">${order.id} — ${order.title}</option>`).join('')
    : '<option value="">No orders yet</option>';
}

function openModal(title, body) {
  modalTitle.textContent = title;
  modalBody.innerHTML = body;
  modalBackdrop.classList.remove('hidden');

  modalBody.querySelectorAll('[data-add-product]').forEach(button => {
    button.addEventListener('click', () => {
      const item = prebuiltItems.find(product => product.id === button.dataset.addProduct);
      if (!item) return;
      const cart = getUserCart();
      const existing = cart.find(entry => entry.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      if (state.currentUser) {
        state.currentUser.cart = cart;
        saveAccount(state.currentUser);
      } else {
        state.cart = cart;
      }
      renderCart();
      closeModal();
    });
  });

  modalBody.querySelectorAll('[data-close-modal]').forEach(button => {
    button.addEventListener('click', closeModal);
  });
}

function closeModal() {
  modalBackdrop.classList.add('hidden');
}

function renderAccount() {
  const user = state.currentUser;
  if (!user) {
    accountStatus.textContent = 'You are not signed in yet.';
    accountInfo.innerHTML = 'Create an account or log in to save your orders and support tickets.';
    logoutBtn.hidden = true;
    return;
  }

  accountStatus.textContent = `Signed in as ${user.name}`;
  accountInfo.innerHTML = `
    <strong>Email:</strong> ${user.email}<br />
    <strong>Member since:</strong> ${user.joined}<br />
    <strong>Orders:</strong> ${getCurrentUserOrders().length}
  `;
  logoutBtn.hidden = false;
}

function setAuthView(view) {
  state.authView = view;
  document.querySelectorAll('#authGate .auth-toggle button, .account-grid .auth-toggle button').forEach(button => {
    button.classList.toggle('active', button.dataset.authView === view);
  });
  loginForm.hidden = view !== 'login';
  registerForm.hidden = view !== 'register';
}

function setAuthGate(open) {
  authGate.hidden = !open;
  pageContainer.hidden = open;
  if (open) {
    document.body.classList.add('locked');
  } else {
    document.body.classList.remove('locked');
  }
}

function renderOrders() {
  const currentOrders = getCurrentUserOrders();
  orderCount.textContent = `${currentOrders.length} orders`;
  renderSupportOrderOptions();

  if (!state.currentUser) {
    ordersList.innerHTML = '<div class="orders-empty">Log in to see your order history.</div>';
    return;
  }

  if (currentOrders.length === 0) {
    ordersList.innerHTML = '<div class="orders-empty">You have no orders yet. Purchase a product or submit a commission to get started.</div>';
    return;
  }

  ordersList.innerHTML = currentOrders
    .map(order => `
      <div class="order-card">
        <div class="order-header">
          <div>
            <h3 style="margin: 0;">${order.title}</h3>
            <div class="order-meta">
              <span class="order-key">${order.id}</span>
              <span class="pill">${order.type}</span>
            </div>
          </div>
          <div style="text-align: right;">
            <strong>${formatCurrency(order.price)}</strong>
            <div style="color: var(--muted);">${order.date}</div>
          </div>
        </div>
        <div class="order-meta" style="margin-top: 0.35rem;">
          <span class="order-status">${order.status}</span>
        </div>
        ${order.key ? `
          <div class="order-meta" style="margin-top: 0.3rem;">
            <span class="order-key">License: ${order.key}</span>
          </div>
        ` : ''}
        ${order.progress !== undefined ? `
          <div style="margin-top: 0.5rem;">
            <div class="order-meta">
              <span style="color: #c7d2fe; font-size: 0.88rem;">Progress ${order.progress}%</span>
            </div>
            <div class="progress-bar" style="margin-top: 0.6rem;">
              <div class="progress-fill" style="width: ${order.progress}%;"></div>
            </div>
          </div>
        ` : ''}
        <div class="actions" style="margin-top: 0.75rem;">
          <button class="mini-action" data-action="cancel" data-id="${order.id}">Cancel order</button>
          <button class="mini-action" data-action="refund" data-id="${order.id}">Request refund</button>
        </div>
      </div>
    `)
    .join('');

  ordersList.querySelectorAll('button[data-action]').forEach(button => {
    button.addEventListener('click', () => {
      const currentOrders = getCurrentUserOrders();
      const order = currentOrders.find(item => item.id === button.dataset.id);
      if (!order) return;
      if (button.dataset.action === 'cancel') {
        if (order.status === 'Cancelled') {
          alert('This order is already cancelled.');
          return;
        }
        order.status = 'Cancellation Requested';
        const ticket = {
          id: `SUP-${Math.floor(1000 + Math.random() * 9000)}`,
          orderId: order.id,
          type: 'cancel',
          message: `Cancellation requested for ${order.title}.`,
          status: 'Open',
          date: new Date().toISOString().split('T')[0]
        };
        if (!state.currentUser.supportTickets) {
          state.currentUser.supportTickets = [];
        }
        state.currentUser.supportTickets.unshift(ticket);
      } else if (button.dataset.action === 'refund') {
        if (order.status === 'Refund Pending' || order.status === 'Refunded') {
          alert('A refund request is already in progress for this order.');
          return;
        }
        order.status = 'Refund Pending';
        const ticket = {
          id: `SUP-${Math.floor(1000 + Math.random() * 9000)}`,
          orderId: order.id,
          type: 'refund',
          message: `Refund requested for ${order.title}.`,
          status: 'Open',
          date: new Date().toISOString().split('T')[0]
        };
        if (!state.currentUser.supportTickets) {
          state.currentUser.supportTickets = [];
        }
        state.currentUser.supportTickets.unshift(ticket);
      }
      if (state.currentUser) {
        state.currentUser.orders = currentOrders;
        saveAccount(state.currentUser);
      }
      renderOrders();
      renderSupport();
      setTab('support');
    });
  });
}

function renderStaffWorkflow() {
  const staffQueue = state.workflowOrders.filter(order => order.stage === 'staff-review' || order.stage === 'ready-for-delivery');
  if (staffQueue.length === 0) {
    staffOrdersList.innerHTML = '<div class="orders-empty">No orders are waiting for staff action.</div>';
    return;
  }

  staffOrdersList.innerHTML = staffQueue
    .map(order => `
      <div class="workflow-card">
        <div class="workflow-head">
          <div>
            <h3>${order.title}</h3>
            <p>${order.buyerName} • ${order.buyerEmail || 'No email yet'}</p>
          </div>
          <span class="workflow-badge">${order.stage === 'ready-for-delivery' ? 'Ready to send' : 'Staff review'}</span>
        </div>
        <div class="workflow-meta">
          <span>${order.id}</span>
          <span>${order.type}</span>
          <span>${formatCurrency(order.price)}</span>
        </div>
        <div class="workflow-actions">
          ${order.stage === 'staff-review' ? '<button class="mini-action" data-staff-action="it">Pass to IT</button>' : ''}
          ${order.stage === 'ready-for-delivery' ? '<button class="mini-action" data-staff-action="deliver">Send to buyer email</button>' : ''}
        </div>
      </div>
    `)
    .join('');

  staffOrdersList.querySelectorAll('[data-staff-action]').forEach(button => {
    button.addEventListener('click', () => {
      const order = state.workflowOrders.find(item => item.id === button.closest('.workflow-card').querySelector('.workflow-meta span')?.textContent);
      if (!order) return;
      if (button.dataset.staffAction === 'it') {
        order.stage = 'in-it';
        order.updateHistory.push({ stage: 'in-it', note: 'Assigned to IT department.', date: new Date().toISOString().split('T')[0] });
      } else if (button.dataset.staffAction === 'deliver') {
        order.stage = 'delivered';
        order.updateHistory.push({ stage: 'delivered', note: 'Finished order sent to buyer email.', date: new Date().toISOString().split('T')[0] });
      }
      saveWorkflowOrders();
      renderStaffWorkflow();
      renderItWorkflow();
    });
  });
}

function renderItWorkflow() {
  const itQueue = state.workflowOrders.filter(order => order.stage === 'in-it' || order.stage === 'ready-for-delivery');
  if (itQueue.length === 0) {
    itOrdersList.innerHTML = '<div class="orders-empty">No orders are currently assigned to IT.</div>';
    return;
  }

  itOrdersList.innerHTML = itQueue
    .map(order => `
      <div class="workflow-card">
        <div class="workflow-head">
          <div>
            <h3>${order.title}</h3>
            <p>${order.buyerName} • ${order.buyerEmail || 'No email yet'}</p>
          </div>
          <span class="workflow-badge">${order.stage === 'in-it' ? 'Working now' : 'Completed'}</span>
        </div>
        <div class="workflow-meta">
          <span>${order.id}</span>
          <span>${order.type}</span>
          <span>${formatCurrency(order.price)}</span>
        </div>
        <div class="workflow-actions">
          ${order.stage === 'in-it' ? '<button class="mini-action" data-it-action="done">Mark completed</button>' : ''}
        </div>
      </div>
    `)
    .join('');

  itOrdersList.querySelectorAll('[data-it-action]').forEach(button => {
    button.addEventListener('click', () => {
      const order = state.workflowOrders.find(item => item.id === button.closest('.workflow-card').querySelector('.workflow-meta span')?.textContent);
      if (!order) return;
      order.stage = 'ready-for-delivery';
      order.updateHistory.push({ stage: 'ready-for-delivery', note: 'IT completed the development work.', date: new Date().toISOString().split('T')[0] });
      saveWorkflowOrders();
      renderItWorkflow();
      renderStaffWorkflow();
    });
  });
}

function renderSupport() {
  const tickets = getCurrentUserTickets();
  if (tickets.length === 0) {
    supportList.innerHTML = '<div class="orders-empty">No support requests yet.</div>';
    return;
  }

  supportList.innerHTML = tickets
    .map(ticket => `
      <div class="support-card">
        <div class="meta-line">
          <span class="pill">${ticket.type === 'refund' ? 'Refund' : ticket.type === 'cancel' ? 'Cancellation' : 'Help'}</span>
          <span>${ticket.id}</span>
          <span>${ticket.date}</span>
        </div>
        <h3 style="margin: 0.45rem 0;">${ticket.message}</h3>
        <div class="meta-line">
          <span class="order-key">Order: ${ticket.orderId}</span>
          <span class="pill">${ticket.status}</span>
        </div>
        <div class="actions">
          <button class="mini-action" data-ticket-action="resolve" data-id="${ticket.id}">Mark resolved</button>
        </div>
      </div>
    `)
    .join('');

  supportList.querySelectorAll('button[data-ticket-action="resolve"]').forEach(button => {
    button.addEventListener('click', () => {
      const tickets = getCurrentUserTickets();
      const ticket = tickets.find(item => item.id === button.dataset.id);
      if (!ticket) return;
      ticket.status = 'Resolved';
      if (state.currentUser) {
        state.currentUser.supportTickets = tickets;
        saveAccount(state.currentUser);
      }
      renderSupport();
    });
  });
}

searchInput.addEventListener('input', event => {
  state.search = event.target.value;
  renderStore();
});

categoryFilter.addEventListener('change', event => {
  state.category = event.target.value;
  renderStore();
});

sortFilter.addEventListener('change', event => {
  state.sort = event.target.value;
  renderStore();
});

applyPromoBtn.addEventListener('click', () => {
  state.promo = promoInput.value.trim().toUpperCase();
  state.promoApplied = state.promo === 'STU20' || state.promo === 'CTRL+ALT+STU50';
  promoStatus.textContent = state.promoApplied ? 'Promo applied' : 'No promo applied';
  promoStatus.className = `pill ${state.promoApplied ? 'success' : ''}`;
  renderCart();
});

checkoutBtn.addEventListener('click', () => {
  if (!requireAccount('place an order')) {
    return;
  }

  const cart = getUserCart();
  if (cart.length === 0) {
    alert('Add at least one product to your cart before checking out.');
    return;
  }

  const total = getCartTotal();
  const itemTitles = cart.map(item => item.title).join(', ');
  openModal('Checkout', `
    <form id="checkoutForm" class="form-group">
      <div class="field-row">
        <div>
          <label>Full name</label>
          <input type="text" id="checkoutName" value="${state.currentUser ? state.currentUser.name : ''}" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="checkoutEmail" value="${state.currentUser ? state.currentUser.email : ''}" required />
        </div>
      </div>
      <div class="field-row">
        <div>
          <label>Payment method</label>
          <select id="checkoutMethod">
            <option value="GCash">GCash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Notes</label>
        <textarea id="checkoutNotes" placeholder="Add any order notes or email/chat delivery preferences..."></textarea>
      </div>
      <div class="notice">Order total: ${formatCurrency(total)} for ${itemTitles}</div>
      <div class="card-actions" style="margin-top: 1rem;">
        <button class="primary-btn" type="submit">Place order</button>
        <button class="secondary-btn" type="button" data-close-modal="true">Cancel</button>
      </div>
    </form>
  `);

  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('checkoutName').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const method = document.getElementById('checkoutMethod').value;
    const notes = document.getElementById('checkoutNotes').value.trim();

    if (!name || !email) {
      alert('Please complete the checkout form.');
      return;
    }

    const cart = getUserCart();
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      title: `Cart Checkout (${itemTitles})`,
      type: 'Prebuilt',
      price: total,
      date: new Date().toISOString().split('T')[0],
      status: 'Paid',
      key: generateKey(itemTitles),
      notes: `${method} • ${notes || 'No additional notes'}`
    };
    state.currentUser.orders.unshift(newOrder);
    buildWorkflowOrder(newOrder, 'checkout');
    state.currentUser.cart = [];
    saveAccount(state.currentUser);
    renderCart();
    renderOrders();
    closeModal();
    setTab('orders');
    alert('Checkout complete. Your order has been placed successfully.');
  });
});

document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

projectDescription.addEventListener('input', event => {
  state.description = event.target.value;
});

commissionForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!requireAccount('submit a commission')) {
    return;
  }

  const descriptionText = state.description.trim();
  if (!descriptionText) {
    alert('Please describe your custom code requirements before submitting.');
    return;
  }

  const price = getEstimatedPrice();
  const newOrder = {
    id: `COMM-${Math.floor(1000 + Math.random() * 9000)}`,
    title: `Custom Project (${state.selectedScope})`,
    type: 'Commission',
    price,
    date: new Date().toISOString().split('T')[0],
    status: 'In Development',
    progress: 12
  };
  state.currentUser.orders.unshift(newOrder);
  buildWorkflowOrder(newOrder, 'commission');
  saveAccount(state.currentUser);

  state.description = '';
  projectDescription.value = '';
  state.selectedScope = 'medium';
  state.selectedDelivery = 'standard';
  state.selectedStack = ['React', 'Node.js'];
  renderCommissionOptions();
  renderEstimatedPrice();
  renderOrders();
  setTab('orders');
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  const accounts = JSON.parse(localStorage.getItem('codeStoreAccounts') || '[]');
  const user = accounts.find(account => account.email === email && account.password === password);
  if (!user) {
    alert('No account found for that email and password.');
    return;
  }
  state.currentUser = {
    ...user,
    orders: user.orders || [],
    supportTickets: user.supportTickets || [],
    cart: user.cart || []
  };
  if (state.cart.length > 0) {
    const existingCart = state.currentUser.cart || [];
    state.currentUser.cart = [...existingCart];
    state.cart.forEach(item => {
      const existing = state.currentUser.cart.find(cartItem => cartItem.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.currentUser.cart.push(item);
      }
    });
    state.cart = [];
  }
  saveAccount(state.currentUser);
  renderAccount();
  renderOrders();
  renderCart();
  setAuthGate(false);
  setTab('store');
});

registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = registerName.value.trim();
  const email = registerEmail.value.trim();
  const password = registerPassword.value.trim();
  if (!name || !email || !password) {
    alert('Please complete all fields to register.');
    return;
  }

  const accounts = JSON.parse(localStorage.getItem('codeStoreAccounts') || '[]');
  if (accounts.some(account => account.email === email)) {
    alert('An account with this email already exists.');
    return;
  }

  const newUser = {
    name,
    email,
    password,
    joined: new Date().toISOString().split('T')[0],
    orders: [],
    supportTickets: [],
    cart: []
  };
  accounts.push(newUser);
  localStorage.setItem('codeStoreAccounts', JSON.stringify(accounts));
  state.currentUser = newUser;
  if (state.cart.length > 0) {
    state.currentUser.cart = [...state.cart];
    state.cart = [];
  }
  saveAccount(state.currentUser);
  renderAccount();
  renderOrders();
  renderCart();
  setAuthGate(false);
  setTab('store');
});

logoutBtn.addEventListener('click', () => {
  state.currentUser = null;
  localStorage.removeItem('codeStoreAccount');
  renderAccount();
  setAuthGate(true);
  setAuthView('login');
});

document.querySelectorAll('.auth-toggle button').forEach(button => {
  button.addEventListener('click', () => setAuthView(button.dataset.authView));
});

supportForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!requireAccount('submit support')) {
    return;
  }

  const orderId = supportOrderSelect.value;
  const message = supportMessage.value.trim();
  if (!message) {
    alert('Please describe your issue before submitting.');
    return;
  }

  const order = getCurrentUserOrders().find(item => item.id === orderId);
  if (!order) {
    alert('Please select a valid order.');
    return;
  }

  if (supportType.value === 'refund') {
    if (order.status === 'Refund Pending' || order.status === 'Refunded') {
      alert('A refund request is already in progress.');
      return;
    }
    order.status = 'Refund Pending';
  } else if (supportType.value === 'cancel') {
    if (order.status === 'Cancelled') {
      alert('This order is already cancelled.');
      return;
    }
    order.status = 'Cancellation Requested';
  }

  const ticket = {
    id: `SUP-${Math.floor(1000 + Math.random() * 9000)}`,
    orderId: order.id,
    type: supportType.value,
    message,
    status: 'Open',
    date: new Date().toISOString().split('T')[0]
  };

  if (!state.currentUser.supportTickets) {
    state.currentUser.supportTickets = [];
  }
  state.currentUser.supportTickets.unshift(ticket);
  saveAccount(state.currentUser);

  supportMessage.value = '';
  renderOrders();
  renderSupport();
  setTab('support');
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', event => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  state.currentUser = loadAccount();
  renderCategoryFilter();
  renderTabs();
  renderStore();
  renderLanguages();
  renderCommissionOptions();
  renderEstimatedPrice();
  renderCart();
  state.workflowOrders = loadWorkflowOrders();
  renderOrders();
  renderSupport();
  renderStaffWorkflow();
  renderItWorkflow();
  renderAccount();
  setAuthView('login');
  setTab('store');
  setAuthGate(!state.currentUser);
  initNightSky();
});

function initNightSky() {
  const sky = document.getElementById('night-sky');
  if (!sky) return;
  const starCount = 20;

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.setProperty('--top', `${Math.random() * 100}%`);
    star.style.setProperty('--left', `${Math.random() * 100}%`);
    star.style.setProperty('--size', `${Math.random() * 2 + 1}`);
    star.style.setProperty('--length', `${Math.random() * 90 + 70}`);
    star.style.setProperty('--duration', `${Math.random() * 2 + 2.5}s`);
    star.style.setProperty('--delay', `${Math.random() * 6}s`);
    sky.appendChild(star);
  }
}
