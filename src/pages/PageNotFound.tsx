import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-black text-primary">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mt-6">
        Page Not Found
      </h2>

      <p className="text-text-secondary mt-3 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <div className="mt-8">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </section>
  );
}

export default PageNotFound;
