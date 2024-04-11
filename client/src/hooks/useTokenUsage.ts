import { useEffect, useState } from 'react';
import { useGetTokenUsage } from 'librechat-data-provider/react-query';
import type { TGetTokenUsage } from 'librechat-data-provider';

export default function useTokenUsage() :TGetTokenUsage[] | null {
  const { data: tokenUsageData = [] } = useGetTokenUsage();
  const [emailTokenList, setEmailTokenList] = useState<TGetTokenUsage[] | null>(null);

  useEffect(() => {
    if (Array.isArray(tokenUsageData)) {
      setEmailTokenList(tokenUsageData);
    } else {
      setEmailTokenList(null);
    }
  }, [tokenUsageData]);

  return emailTokenList;
}