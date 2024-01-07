import React, { useEffect, useState } from 'react';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import AddIcon from '@material-ui/icons/Add';
import './FloatMenu.css';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const FloatMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMainButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (sectionId) => {
    window.location.href = `#${sectionId}`;
    setIsOpen(true);
  };

  return isVisible ? (
    <div>
      <FloatingMenu
        slideSpeed={500}
        direction="down"
        spacing={15}
        isOpen={isOpen}
        className="my-floating-menu"
      >
        <MainButton
          iconResting={<AddIcon className="color-button" />}
          iconActive={<AddIcon className="color-button" />}
          backgroundColor="black"
          onClick={handleMainButtonClick}
          size={56}
          className="my-main-button"
        />
        <ChildButton
          icon={<HomeIcon style={{ fontSize: 18 }} className="color-button" />}
          backgroundColor="white"
          size={40}
          onClick={() => navigateToSection('home')}
          className="my-main-button"
        />
        <ChildButton
          icon={<PersonIcon style={{ fontSize: 18 }} className="color-button" />}
          backgroundColor="white"
          size={40}
          onClick={() => navigateToSection('#about')}
          className="my-main-button"
        />
        <ChildButton
          icon={<BuildIcon style={{ fontSize: 18 }} className="color-button" />}
          backgroundColor="white"
          size={40}
          onClick={() => navigateToSection('#skills')}
          className="my-main-button"
        />
        <ChildButton
          icon={<CodeIcon style={{ fontSize: 18 }} className="color-button" />}
          backgroundColor="white"
          size={40}
          onClick={() => navigateToSection('projects')}
          className="my-main-button"
        />
        <ChildButton
          icon={<MailOutlineIcon style={{ fontSize: 18 }} className="color-button" />}
          backgroundColor="white"
          size={40}
          onClick={() => navigateToSection('contact')}
          className="my-main-button"
        />
      </FloatingMenu>
    </div>
  ) : null;
};

export default FloatMenu;
