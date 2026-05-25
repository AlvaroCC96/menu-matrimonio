import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase.js';
import { countByField, createGuest } from './utils/guests.js';
import { CartaView } from './components/CartaView.jsx';
import { DashboardView } from './components/DashboardView.jsx';
import { Header } from './components/Header.jsx';
import { LoginScreen } from './components/LoginScreen.jsx';
import { RegisterView } from './components/RegisterView.jsx';
import { Stat } from './components/Stat.jsx';
import { Tabs } from './components/Tabs.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [guests, setGuests] = useState([]);
  const [tab, setTab] = useState('registro');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(collection(db, 'guests'), (snapshot) => {
      const data = snapshot.docs
        .map((d) => ({ ...d.data() }))
        .sort((a, b) => a.number - b.number);
      setGuests(data);
    });

    return unsubscribe;
  }, [user]);

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginError('');
    } catch {
      setLoginError('Email o contraseña incorrectos');
    }
  };

  const logout = () => signOut(auth);

  const updateGuest = (id, field, value) =>
    setDoc(doc(db, 'guests', id), { [field]: value }, { merge: true });

  const addGuest = () => {
    const g = createGuest(guests.length + 1);
    return setDoc(doc(db, 'guests', g.id), g);
  };

  const removeGuest = async (id) => {
    await deleteDoc(doc(db, 'guests', id));
    const remaining = guests.filter((g) => g.id !== id);
    await Promise.all(
      remaining.map((g, i) =>
        setDoc(doc(db, 'guests', g.id), { number: i + 1 }, { merge: true })
      )
    );
  };

  const completed = guests.filter(
    (g) => g.aperitivo && g.bebida && g.entrada && g.fondo && g.postre
  ).length;

  const dashboard = useMemo(() => ({
    aperitivo: countByField(guests, 'aperitivo'),
    bebida: countByField(guests, 'bebida'),
    entrada: countByField(guests, 'entrada'),
    fondo: countByField(guests, 'fondo'),
    postre: countByField(guests, 'postre'),
  }), [guests]);

  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(query.toLowerCase())
  );

  if (authLoading) {
    return <div className="loading-screen">Cargando...</div>;
  }

  if (!user) {
    return (
      <LoginScreen
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginError={loginError}
        onLogin={login}
      />
    );
  }

  return (
    <div className="app">
      <Header onLogout={logout} />

      <section className="stats">
        <Stat label="Invitados" value={guests.length} />
        <Stat label="Completos" value={completed} />
        <Stat label="Pendientes" value={guests.length - completed} />
        <Stat label="Avance" value={`${Math.round((completed / guests.length) * 100 || 0)}%`} />
      </section>

      <Tabs activeTab={tab} setActiveTab={setTab} />

      {tab === 'registro' && (
        <RegisterView
          query={query}
          setQuery={setQuery}
          guests={filteredGuests}
          addGuest={addGuest}
          updateGuest={updateGuest}
          removeGuest={removeGuest}
        />
      )}

      {tab === 'carta' && <CartaView />}

      {tab === 'dashboard' && <DashboardView guests={guests} dashboard={dashboard} />}
    </div>
  );
}
