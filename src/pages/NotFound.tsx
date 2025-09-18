import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-96">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-8">
            <div className="mb-6">
              <h1 className="text-6xl font-bold text-gray-400 mb-2">404</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
              <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>
              <p className="text-sm text-gray-500 mt-2">
                Attempted to access: <code className="bg-gray-100 px-1 rounded">{location.pathname}</code>
              </p>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()} className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
