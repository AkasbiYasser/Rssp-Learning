import logoImage from '../../assets/images/RSSPLearning.png';
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';

//components
import CustomLink from "../CustomLink/CustomLink";

function Header() {
  const [user, setUser] = useState();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/login");
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const val = await axios.get('http://rssplearning.tech/admin/categories');
        setCategories(val.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const GetCookie = (key) => {
    const cookieValue = Cookies.get(key);
    try {
      const jsonValue = JSON.parse(cookieValue);
      return jsonValue;
    } catch (e) {
      console.error("Cookie value is not valid JSON", e);
      return undefined;
    }
  };

  useEffect(() => {
    setUser(GetCookie("user"));
  }, []);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoImage} alt="RSSPLearning Logo" className={styles.logoImage} />
          </a>
        </div>

        <div className={styles.list}>
          <ul>
            <li><CustomLink href="/#home">Accueil</CustomLink></li>
            <li ref={dropdownRef}>
              <div
                className={styles.dropdownTrigger}
                onClick={toggleDropdown}
              >
                <CustomLink href="#">Cours</CustomLink>
                <span
                  className={`
                    ${styles.dropdownIcon}
                    ${isDropdownVisible ? styles.rotated : ''}
                  `}
                >
                  ▼
                </span>
              </div>
              {isDropdownVisible && (
                <div className={styles.dropdown}>
                  <a href={`/courses`} className={styles.dropdownItem}>Tout</a>
                  {categories.map((c) => (
                    <a
                      key={c.id}
                      href={`/courses/${c.name}`}
                      className={styles.dropdownItem}
                      onClick={() => setDropdownVisible(false)}
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
            {
              (user && user.courseList?.length !== 0) &&
              <li><CustomLink href="/sessions">Sessions</CustomLink></li>
            }
            <li><CustomLink href="/#about">À propos</CustomLink></li>
            <li><CustomLink href="/#newsletter">Newsletter</CustomLink></li>
            {
              user &&
              <li><CustomLink href="/profile">Profil</CustomLink></li>
            }
          </ul>
        </div>

        <div className={styles.auth}>
          {
            user ? (
              <button className="btn-v2" onClick={handleLogout}>Se déconnecter</button>
            ) : (
              <>
                <button className="btn-v2" onClick={() => handleNavigate("/login")}>Se connecter</button>
                <button onClick={() => handleNavigate("/register")}>S’inscrire</button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
