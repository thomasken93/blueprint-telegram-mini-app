import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { MusicPlayer } from '@/components/MusicPlayer';
import { OverlayButton } from '@/components/OverlayButton';
import { useCallback, useMemo, useState } from 'react';

import ArrowLeft from '@/assets/svgs/arrow-left.svg';
import { Tabs } from '@/components/Tabs';
import { HashTag } from './HashTag';
import { Partners } from './Partners';
import { Updates } from './Updates';
import { DailyTasks } from './DailyTasks';

export const Earn = () => {
  const [tabOption, setTabOption] = useState(0);

  const onTabChange = useCallback((option: any) => {
    setTabOption(option)
  }, [setTabOption])

  const tab = useMemo(() => {
    switch(tabOption) {
      case 0:
        return <HashTag />
      case 1:
        return <Partners />
      case 2:
        return <DailyTasks />
      case 3:
        return <Updates />
    }
  }, [tabOption]);

  const pageName = useMemo(() => {
    switch(tabOption) {
      case 0:
        return "HashTag"
      case 1:
        return "Partners"
      case 2:
        return "Daily Task"
      case 3:
        return "Updates"
    }
  }, [tabOption]); 

  return (
    <div>
      <div className="mt-[51px] text-center text-[24px] font-[700] px-2">
        {pageName}
        <a className='float-left'>
          <ArrowLeft />
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <Tabs
          width='294px'
          options={[
            { label: 'HashTag' },
            { label: 'Partners' },
            { label: 'Daily Task' },
            { label: 'Updates' },
          ]}
          onOptionChange={onTabChange}
        />
      </div>
      <div className='mt-[22px]'>
        {tab}
      </div>
    </div>
  )
}

export default Earn
