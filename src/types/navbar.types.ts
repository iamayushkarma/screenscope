type NavBarType = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

// moble nav types
type MobileNavType = {
  showMobileNavBar?: boolean;
  setShowMobileNavBar: (value: boolean) => void;
};

export type { NavBarType, MobileNavType };
