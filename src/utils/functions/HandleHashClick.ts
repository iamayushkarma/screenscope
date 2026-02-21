export const handleHashClick = (
  e: React.MouseEvent,
  href: string,
  navigate: (path: string) => void,
  pathname: string,
) => {
  e.preventDefault();
  const id = href.replace("#", "");
  if (pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};
