import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import CreatePostPage from './pages/CreatePostPage';
import UserProfilePage from './pages/UserProfilePage';
import OtherUserProfilePage from './pages/OtherUserProfilePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import TagsPage from './pages/TagsPage';
import TagDetailPage from './pages/TagDetailPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/profile/me" element={<UserProfilePage />} />
            <Route path="/profile/:userId" element={<OtherUserProfilePage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/tag/:tag" element={<TagDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:category" element={<CategoryDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
