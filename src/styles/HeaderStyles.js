/**
 * HeaderStyles.js — UPDATED
 * --------------------------
 * Added NavGroup and NavButton styled components
 * for the dashboard / patient list navigation.
 *
 * NavButton uses a transient prop $active to control
 * highlighted state based on the current route.
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.5px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

/* ── NEW: Navigation button group ── */
export const NavGroup = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    order: 3;            /* push below logo + theme on small screens */
    width: 100%;
    justify-content: center;
  }
`;

/**
 * NavButton — $active transient prop drives highlight.
 *
 * When $active is true:
 *   - background becomes semi-opaque white
 *   - a bottom border indicator appears
 *   - text is bolder
 *
 * When $active is false:
 *   - transparent background
 *   - subtle hover effect
 */
export const NavButton = styled.button`
  background: ${({ $active, theme }) =>
    $active ? 'rgba(255, 255, 255, 0.25)' : 'transparent'};
  color: ${({ theme }) => theme.headerText};
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  position: relative;

  /* Active bottom indicator line */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? '60%' : '0%')};
    height: 3px;
    background: ${({ theme }) => theme.headerText};
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);

    &::after {
      width: 40%;
    }
  }

  /* Scale feedback on click */
  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.9rem;
    flex: 1;
    justify-content: center;
  }
`;

/* ── Right side controls group ── */
export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ThemeButton = styled.button`
  background: ${({ theme }) => theme.toggleBg};
  border: none;
  color: ${({ theme }) => theme.headerText};
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.toggleHover};
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;