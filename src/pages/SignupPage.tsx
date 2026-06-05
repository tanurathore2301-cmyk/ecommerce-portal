import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiUserPlus } from 'react-icons/fi';
import { Button } from '@components/common';
import { useAppDispatch } from '@hooks/useRedux';
import { FALLBACK_IMAGE } from '@utils/productImages';
import { login } from '@store/slices/authSlice';
import { useToast } from '@hooks/useToast';

export const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    dispatch(login({ name, email }));
    showToast(`Welcome to Styla, ${name}!`, 'success');
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
            alt="Shopping"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/80 to-accent-cyan/80 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Join Styla</h2>
              <p className="opacity-90">Get 25% off your first order when you sign up today!</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 md:p-10">
          <h1 className="text-2xl font-bold mb-1 text-gradient">Sign Up</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 hover:underline font-medium">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  className="pl-10"
                  required
                />
              </div>
            </div>
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
            <Button type="submit" variant="secondary" className="w-full gap-2">
              <FiUserPlus /> Create Account
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
