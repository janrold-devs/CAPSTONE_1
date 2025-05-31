'use server';

import db from '@/lib/db';

export async function registerUser(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  console.log('Register Request:', { email, password });

  if (!email || !password) {
    console.warn('Missing fields');
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    console.log(' Existing:', existing);

    if (existing.length > 0) {
      console.warn('User already exists');
      return { success: false, message: 'User already exists.' };
    }

    const [insertResult] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
    console.log('INSERT result:', insertResult);

    return { success: true, message: 'User registered successfully.' };
  } catch (err) {
    console.error('Registration error:', err);
    return { success: false, message: 'Server error' };
  }
}
