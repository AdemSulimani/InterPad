const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: AuthUser;
  token?: string;
  requiresVerification?: boolean;
  userId?: string;
}

export async function registerUser(payload: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as AuthResponse;

  if (!res.ok) {
    throw new Error(data.message || 'Register failed');
  }

  return data;
}

export async function loginUser(payload: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as AuthResponse;

  if (!res.ok) {
    throw new Error(data.message || 'Login failed');
  }

  return data;
}

export async function verifyAuthCode(payload: {
  email: string;
  code: string;
}) {
  const res = await fetch(`${API_BASE_URL}/api/auth/verify-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as AuthResponse;

  if (!res.ok) {
    throw new Error(data.message || 'Verification failed');
  }

  return data;
}

export async function resendVerificationCode(payload: { email: string }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/resend-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as AuthResponse;

  if (!res.ok) {
    throw new Error(data.message || 'Failed to resend code');
  }

  return data;
}

