import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simple mock authentication - replace with real auth later
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, accept any password
    if (password.length > 0) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Please enter a password");
    }
  };

  return (
    <div className="min-h-screen bg-surface-dark flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Key className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-white mb-2">
            Admin Login
          </h1>
          <p className="text-white/60">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="bg-charcoal p-8 rounded-lg space-y-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full bg-surface-dark border border-white/10 rounded-md pl-10 pr-12 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          <Button type="submit" className="w-full py-6 text-base font-bold">
            Sign In
          </Button>

          <p className="text-white/40 text-sm text-center">
            Demo mode: Enter any password to continue
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
