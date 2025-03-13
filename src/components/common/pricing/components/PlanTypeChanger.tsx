"use client"

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import Link from "next/link";

const PlanTypeChanger = () => {
  const pathname = usePathname().split('/').filter(Boolean).pop()

  const changePlanRoute = useMemo(() => (
      <span className={"underline hover:no-underline"}>
        {
          pathname === 'personal'
            ? <Link href={'/prof'}>Rhyme Professional</Link>
            : <Link href={'/personal'}>Rhyme Personal</Link>
        }
      </span>)
    , [pathname]
  )

  return (
    <div>
      <div className={"mt-8 text-center font-semibold"}>If this plan doesn’t feel right for your business
        try {changePlanRoute}</div>
    </div>
  );
};

export default PlanTypeChanger;
