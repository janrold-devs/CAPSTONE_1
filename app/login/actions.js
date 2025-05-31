'use server';

import db from '@/lib/db';

export async function loginUser(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0 || rows[0].password !== password) {
      return { success: false, message: 'Invalid email or password.' };
    }

    return { success: true, message: 'Login successful.' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Server error' };
  }
}
