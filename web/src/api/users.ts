/**
 * User API Client
 * 
 * Provides API calls for user profile operations.
 */

export interface UserProfile {
  id: string;
  azureUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  preferences: string;
  createdAt: string;
  updatedAt: string;
  playerId?: string;
  coachId?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  statusCode: number;
}

const API_BASE = '/api/v1';

/**
 * Get user profile by ID
 * @param userId - The user's ID (GUID)
 * @returns User profile information
 */
export async function getUserById(userId: string): Promise<UserProfile> {
  const response = await fetch(`${API_BASE}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'api-version': '1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }

  const result: ApiResponse<UserProfile> = await response.json();
  
  if (!result.success) {
    throw new Error(result.message || 'Failed to fetch user');
  }

  return result.data;
}

/**
 * Get user profile by email address
 * @param email - The user's email address
 * @returns User profile information
 */
export async function getUserByEmail(email: string): Promise<UserProfile> {
  const response = await fetch(`${API_BASE}/users/by-email?email=${encodeURIComponent(email)}`, {
    headers: {
      'Content-Type': 'application/json',
      'api-version': '1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }

  const result: ApiResponse<UserProfile> = await response.json();
  
  if (!result.success) {
    throw new Error(result.message || 'Failed to fetch user');
  }

  return result.data;
}

/**
 * Get current authenticated user's profile
 * @returns Current user's profile information
 */
export async function getCurrentUser(): Promise<UserProfile> {
  console.log('getCurrentUser: Making request to /api/v1/users/me');
  
  const response = await fetch(`${API_BASE}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'api-version': '1.0',
    },
  });

  console.log('getCurrentUser: Response status:', response.status);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('getCurrentUser: Error response:', errorText);
    throw new Error(`Failed to fetch current user: ${response.status} - ${errorText}`);
  }

  const result: ApiResponse<UserProfile> = await response.json();
  console.log('getCurrentUser: Result:', result);
  
  if (!result.success) {
    throw new Error(result.message || 'Failed to fetch current user');
  }

  return result.data;
}
