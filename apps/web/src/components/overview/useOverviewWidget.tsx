import { parseAsStringEnum, useQueryState } from 'nuqs';

import { mapKeys } from '@mixan/validation';
import type { IChartInput } from '@mixan/validation';

export function useOverviewWidget<T extends string>(
  key: string,
  widgets: Record<T, { title: string; btn: string; chart: IChartInput }>
) {
  const keys = Object.keys(widgets) as T[];
  const [widget, setWidget] = useQueryState<T>(
    key,
    parseAsStringEnum(keys)
      .withDefault(keys[0]!)
      .withOptions({ history: 'push' })
  );
  return [
    {
      ...widgets[widget],
      key: widget,
    },
    setWidget,
    mapKeys(widgets).map((key) => ({
      ...widgets[key],
      key,
    })),
  ] as const;
}
