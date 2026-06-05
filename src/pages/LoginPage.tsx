import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Button } from '@components/common';
import { useAppDispatch } from '@hooks/useRedux';
import { FALLBACK_IMAGE } from '@utils/productImages';
import { login } from '@store/slices/authSlice';
import { useToast } from '@hooks/useToast';

export const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    const name = email.split('@')[0];
    dispatch(login({ name, email }));
    showToast(`Welcome back, ${name}!`, 'success');
    navigate('/');
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="hidden md:block relative">
          <img
            src={FALLBACK_IMAGE}
            alt="Fashion"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-secondary-600/80 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="opacity-90">Sign in to unlock exclusive deals & your wishlist.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 md:p-10">
          <h1 className="text-2xl font-bold mb-1 text-gradient">Log In</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            New here?{' '}
            <Link to="/signup" className="text-primary-600 hover:underline font-medium">
              Create an account
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" variant="primary" className="w-full gap-2">
              <FiLogIn /> Log In
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
