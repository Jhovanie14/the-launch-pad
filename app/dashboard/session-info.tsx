'use client'

import { User } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

interface SessionInfoProps {
  user: User
}

export default function SessionInfo({ user }: SessionInfoProps) {
  const [session, setSession] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
    }
    getSession()
  }, [supabase])

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Session Information</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700">Session Status</h4>
          <p className="text-sm text-gray-600">
            {session ? '✅ Active Session' : '❌ No Session'}
          </p>
        </div>

        {session && (
          <>
            <div>
              <h4 className="text-sm font-medium text-gray-700">Access Token</h4>
              <p className="text-xs text-gray-500 font-mono break-all">
                {session.access_token ? `${session.access_token.substring(0, 20)}...` : 'N/A'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Refresh Token</h4>
              <p className="text-xs text-gray-500 font-mono break-all">
                {session.refresh_token ? `${session.refresh_token.substring(0, 20)}...` : 'N/A'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Token Expires</h4>
              <p className="text-sm text-gray-600">
                {session.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : 'N/A'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Provider</h4>
              <p className="text-sm text-gray-600">
                {user.app_metadata?.provider || 'email'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700">Authentication Method</h4>
              <p className="text-sm text-gray-600">
                {user.app_metadata?.providers?.join(', ') || 'email'}
              </p>
            </div>
          </>
        )}

        <div>
          <h4 className="text-sm font-medium text-gray-700">User ID</h4>
          <p className="text-xs text-gray-500 font-mono">{user.id}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Email</h4>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Email Confirmed</h4>
          <p className="text-sm text-gray-600">
            {user.email_confirmed_at ? '✅ Yes' : '❌ No'}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700">Last Sign In</h4>
          <p className="text-sm text-gray-600">
            {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}
