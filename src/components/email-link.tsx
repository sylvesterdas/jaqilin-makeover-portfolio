
'use client';

import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface EmailLinkProps {
  user: string;
  domain: string;
  className?: string;
  icon?: boolean;
}

export default function EmailLink({ user, domain, className, icon = false }: EmailLinkProps) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    return <span className={className}>Loading email...</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {icon && <Mail size={16} />}
      <span>{email}</span>
    </a>
  );
}
